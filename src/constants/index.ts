import getConfig from 'next/config';
const { publicRuntimeConfig } = getConfig();

export const OPENAI_API_KEY = publicRuntimeConfig.OPENAI_API_KEY;
export const FLIPSIDE_API_KEY = publicRuntimeConfig.FLIPSIDE_API_KEY;
export const AMPLITUDE_KEY = publicRuntimeConfig.AMPLITUDE_KEY;
