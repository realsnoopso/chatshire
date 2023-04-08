import '@styles/reset.css';
import '@styles/globals.css';
import amplitude from 'amplitude-js';
import { AMPLITUDE_KEY, OPENAI_API_KEY, FLIPSIDE_API_KEY } from '@constants';

import type { AppProps } from 'next/app';
import { call } from '@apis/index';

amplitude.getInstance().init(String(AMPLITUDE_KEY));

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
