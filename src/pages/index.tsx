import Head from 'next/head';

import { Home, Generate } from '@/components/pages/index';
import * as historyModule from '@mocks/history.json';
import * as promptExampleModule from '@mocks/promptExample.json';
import * as Types from '@types';
import { Default } from '@layouts';
import AmplitudeHomePage from '@services/amplitude';

export default function HomePage() {
  const history: Types.History[] = JSON.parse(
    JSON.stringify(historyModule)
  ).data;
  const promptExample: Types.PromptExample[] = JSON.parse(
    JSON.stringify(promptExampleModule)
  ).data;

  AmplitudeHomePage();

  return (
    <>
      <Head>
        <title>Chatshire</title>
        <meta
          name="description"
          content="Unlock the Magic of AI for Seamless Crypto Data Analysis"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:image" content="/preview.png" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Default>
        <Home></Home>
      </Default>
    </>
  );
}
