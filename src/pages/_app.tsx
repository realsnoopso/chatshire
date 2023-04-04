import '@styles/reset.css';
import '@styles/globals.css';
import amplitude from 'amplitude-js';

import type { AppProps } from 'next/app';

amplitude.getInstance().init(String(process.env.NEXT_PUBLIC_AMPLITUDE_KEY));

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp