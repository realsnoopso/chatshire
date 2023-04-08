import type { NextApiRequest, NextApiResponse } from 'next';
import { OpenAI } from 'langchain';
import { initializeAgentExecutor } from 'langchain/agents';
import { SerpAPI, Calculator } from 'langchain/tools';
import { ChainValues } from 'langchain/dist/schema';
import { BufferMemory } from 'langchain/memory';
import { ConversationChain } from 'langchain/chains';
import { AMPLITUDE_KEY, OPENAI_API_KEY } from '@constants';

const model = new OpenAI({
  // TODO: don't post this! make it environment variable!
  openAIApiKey: OPENAI_API_KEY,
  temperature: 0.0,
});

type Data = {
  name: string;
};

const memory = new BufferMemory();
const chain = new ConversationChain({ llm: model, memory: memory });

const callAgent = async (input: string) => {
  const response = await chain.call({
    input: input,
  });

  return response.response;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === 'POST') {
    try {
      const input = req.body.input;
      if (!input) {
        res.status(400).json({ name: 'Bad Request' });
        return;
      }
      const modelResponse = await callAgent(input);
      res.status(200).json({ name: modelResponse });
    } catch (error) {
      console.log(error);
    }
  } else {
    res.status(405).json({ name: 'Method Not Allowed' });
  }
}
