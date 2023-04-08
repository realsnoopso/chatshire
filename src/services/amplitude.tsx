import App, { AppProps } from 'next/app';
import { useEffect } from 'react';
import amplitude from 'amplitude-js';

function AmplitudeHomePage() {
  useEffect(() => {
    //amplitude.getInstance().logEvent('pageview')
    amplitude.getInstance().logEvent('daily_active_users');
  }, []);
}

export default AmplitudeHomePage;
