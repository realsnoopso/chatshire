// 1. gpt3.5 turbo
// 2. flipside query

import type { NextApiRequest, NextApiResponse } from 'next';
import { OpenAI } from 'langchain';
import { createEthereumCoreTransactionSchema } from '@/prompt/ethereum/core.transaction';
import {
  SystemMessagePromptTemplate,
  HumanMessagePromptTemplate,
  ChatPromptTemplate,
} from 'langchain/prompts';
import { FlipsideSchema } from '@/schema/interface';
import { ChatOpenAI } from 'langchain/chat_models';
import { Error } from 'mongoose';

// TODO: refactor to have the dependency injection
const chat = new ChatOpenAI({ temperature: 0, maxConcurrency: 5 });

type Data = {
  sqlStatement?: string;
  errorMessage?: string;
};

const callGPT = async (schema: FlipsideSchema, rawUserMessage: string) => {
  const chatPromptTemplate = schema.toChatPromptTemplate();
  console.log('chatPromptTemplate', chatPromptTemplate);
  const response = await chat.generatePrompt([
    await chatPromptTemplate.formatPromptValue({
      userMessage: rawUserMessage,
    }),
  ]);
  console.log({ response });

  // TODO: refactor this for much human readable way
  return response.generations.map((g) => g.map((m) => m.text).join(' '))[0];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try {
    if (req.method === 'POST') {
      const rawUserMessage = req.body.userMessage;
      const ethCoreTxSchema = createEthereumCoreTransactionSchema();
      const modelResponse: string = await callGPT(
        ethCoreTxSchema,
        rawUserMessage
      );

      res.status(200).json({ sqlStatement: modelResponse });
    } else {
      res.status(405).json({ errorMessage: 'Method Not Allowed' });
    }
  } catch (error: any) {
    console.log({ error });
    res.status(400).json({ errorMessage: error.message });
  }
}
