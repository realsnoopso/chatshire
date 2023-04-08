import type { NextApiRequest, NextApiResponse } from 'next';
import { OpenAI } from 'langchain';
import { OPENAI_API_KEY, FLIPSIDE_API_KEY } from '@constants';

const model = new OpenAI({
  // TODO: don't post this! make it environment variable!
  openAIApiKey: OPENAI_API_KEY,
  temperature: 0.0,
});

type Data = {
  name: string;
};

const callModel = async (text: string) => {
  const res = await model.call(text);
  console.log(res);
  return res;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === 'GET') {
    const tempText: string =
      'What would be a good company name a company that makes colorful socks?';
    try {
      const modelResponse: string = await callModel(tempText);
      res.status(200).json({ name: modelResponse });
    } catch (error) {
      console.log(error);
    }
  } else {
    res.status(405).json({ name: 'Method Not Allowed' });
  }
}
