import '@styles/reset.css';
import '@styles/globals.css';
import amplitude from 'amplitude-js';
import { Gnb } from '@/components/common';
import { AMPLITUDE_KEY, OPENAI_API_KEY, FLIPSIDE_API_KEY } from '@constants';

import type { AppProps } from 'next/app';
import { call } from '@apis/index';
import { useRouter } from 'next/router';

amplitude.getInstance().init(String(AMPLITUDE_KEY));

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Gnb></Gnb>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
