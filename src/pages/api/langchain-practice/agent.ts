import type { NextApiRequest, NextApiResponse } from 'next';
import { OpenAI } from 'langchain';
import { initializeAgentExecutor } from 'langchain/agents';
import { SerpAPI, Calculator } from 'langchain/tools';
import { ChainValues } from 'langchain/dist/schema';
import { OPENAI_API_KEY, FLIPSIDE_API_KEY } from '@constants';

const model = new OpenAI({
  // TODO: don't post this! make it environment variable!
  openAIApiKey: OPENAI_API_KEY,
  temperature: 0.0,
});

const tools = [new SerpAPI(), new Calculator()];

type Data = {
  name: string;
};

const loadAgent = async () => {
  console.log('Loaded Agent.');
  return await initializeAgentExecutor(
    tools,
    model,
    'zero-shot-react-description'
  );
};

const callAgent = async (input: string) => {
  const agent = await loadAgent();
  // const result = await executor.call({ input });
  const result = await agent.call({ input });
  console.log(`Got output ${result.output}`);
  return result.output;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === 'GET') {
    const tempText =
      "Who is Moon Jae-In's wife?" +
      ' What is her current age raised to the 0.23 power?';
    const modelResponse: string = await callAgent(tempText);
    res.status(200).json({ name: modelResponse });
  } else {
    res.status(405).json({ name: 'Method Not Allowed' });
  }
}
