import type { NextApiRequest, NextApiResponse } from 'next';
import { FlipsideClient } from '@/services/flipsideClient';

type Data = {
  errorMessage?: string;
  response?: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === 'POST') {
    const query = req.body.query;
    const flipsideClient = new FlipsideClient('chatshire');
    const flipsideResponse = await flipsideClient.createFlipsideQuery(query);
    console.log('>>>>>>>>>> 1', flipsideResponse);
    const flipsideQueryToken = flipsideResponse.token;
    console.log('>>>>>>>>>> 2', flipsideQueryToken);
    const flipsideQueryResult = await flipsideClient.getFlipsideQueryResult(
      flipsideQueryToken
    );
    res.status(200).json({ response: flipsideQueryResult.results });
  } else {
    res.status(405).json({ errorMessage: 'Method Not Allowed' });
  }
}
