import type { NextApiRequest, NextApiResponse } from 'next';
import { OpenAI } from 'langchain';
import { initializeAgentExecutor } from 'langchain/agents';
import { SerpAPI, Calculator } from 'langchain/tools';
import { ChainValues } from 'langchain/dist/schema';
import { BufferMemory } from 'langchain/memory';
import { ConversationChain } from 'langchain/chains';
import { AMPLITUDE_KEY, OPENAI_API_KEY } from '@constants';

import { ChatOpenAI } from 'langchain/chat_models';
import { HumanChatMessage, SystemChatMessage } from 'langchain/schema';

import {
  SystemMessagePromptTemplate,
  HumanMessagePromptTemplate,
  ChatPromptTemplate,
  MessagesPlaceholder,
} from 'langchain/prompts';

const model = new OpenAI({
  // TODO: don't post this! make it environment variable!
  openAIApiKey: OPENAI_API_KEY,
  temperature: 0.0,
});

type Data = {
  text: string;
};

type Texts = {
  text: string[];
};

const chat = new ChatOpenAI({ temperature: 0 });

const callNewHumanChatMessage = async (input: string) => {
  const response = await chat.call([new HumanChatMessage(input)]);

  return response;
};

const callBothSystemChatMsgAndHumanChatMsg = async (
  sysInput: string,
  humanInput: string
) => {
  const response = await chat.call([
    new SystemChatMessage(sysInput),
    new HumanChatMessage(humanInput),
  ]);

  return response;
};

interface Input {
  sysInput: string;
  humanInput: string;
}

const generateMultipleMsg = async (inputs1: Input[], inputs2: Input[]) => {
  const { sysInput: sysInput1, humanInput: humanInput1 } = inputs1[0];
  const { sysInput: sysInput2, humanInput: humanInput2 } = inputs2[0];

  const response = await chat.generate([
    [new SystemChatMessage(sysInput1), new HumanChatMessage(humanInput1)],
    [new SystemChatMessage(sysInput2), new HumanChatMessage(humanInput2)],
  ]);

  return response;
};

const callTranslator = async (
  input: string,
  input_language: string,
  output_language: string
) => {
  const translationPrompt = ChatPromptTemplate.fromPromptMessages([
    SystemMessagePromptTemplate.fromTemplate(
      'You are a helpful assistant that translates {input_language} to {output_language}.'
    ),
    HumanMessagePromptTemplate.fromTemplate('{text}'),
  ]);

  return await chat.generatePrompt([
    await translationPrompt.formatPromptValue({
      input_language: input_language,
      output_language: output_language,
      text: input,
    }),
  ]);
};

const chatPrompt = ChatPromptTemplate.fromPromptMessages([
  SystemMessagePromptTemplate.fromTemplate(
    'The following is a friendly conversation between a human and an AI. The AI is talkative and provides lots of specific details from its context. If the AI does not know the answer to a question, it truthfully says it does not know.'
  ),
  new MessagesPlaceholder('history'),
  HumanMessagePromptTemplate.fromTemplate('{input}'),
]);

const chain = new ConversationChain({
  memory: new BufferMemory({ returnMessages: true, memoryKey: 'history' }),
  prompt: chatPrompt,
  llm: chat,
});

const chatWithState = async (input: string) => {
  const response = await chain.call({
    input: input,
  });

  return response;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data | Texts>
) {
  if (req.method === 'POST') {
    // if querystring = 'human'
    const type = req.query.type;
    if (type === 'human') {
      const modelResponse = await callNewHumanChatMessage(req.body.input);
      res.status(200).json({ text: modelResponse.text });
      return;
    } else if (type === 'human_sys') {
      const modelResponse = await callBothSystemChatMsgAndHumanChatMsg(
        req.body.sysInput,
        req.body.humanInput
      );
      res.status(200).json({ text: modelResponse.text });
      return;
    } else if (type === 'human_sys_multiple') {
      // {
      //   "inputs1": [
      //     {
      //       "sysInput": "Hello",
      //       "humanInput": "Hi there"
      //     },
      //     {
      //       "sysInput": "How can I help you today?",
      //       "humanInput": "I need some assistance with my account"
      //     }
      //   ],
      //   "inputs2": [
      //     {
      //       "sysInput": "Sure, what can I help you with specifically?",
      //       "humanInput": "I want to change my email address"
      //     },
      //     {
      //       "sysInput": "Okay, let me check if I can update that for you.",
      //       "humanInput": "Thanks"
      //     }
      //   ]
      // }
      const modelResponse = await generateMultipleMsg(
        req.body.inputs1,
        req.body.inputs2
      );
      const outputs = modelResponse.generations.map((g) =>
        g.map((m) => m.text).join(' ')
      );
      res.status(200).json({ text: outputs });
      return;
    } else if (type === 'translate') {
      const modelResponse = await callTranslator(
        req.body.input,
        req.body.input_language,
        req.body.output_language
      );
      const outputs = modelResponse.generations.map((g) =>
        g.map((m) => m.text).join(' ')
      );
      res.status(200).json({ text: outputs });
      return;
    } else if (type === 'chat_state') {
      const modelResponse = await chatWithState(req.body.input);
      const outputs = modelResponse.response;
      res.status(200).json({ text: outputs });
    } else {
      res.status(400).json({ text: 'Bad Request' });
      return;
    }
  } else {
    res.status(405).json({ text: 'Method Not Allowed' });
  }
}
