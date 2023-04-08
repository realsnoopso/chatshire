/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  publicRuntimeConfig: {
    FLIPSIDE_API_KEY: process.env.FLIPSIDE_API_KEY,
    OPENAI_API_KEY: process.env.OPENAI_API_KEY,
    NEXT_PUBLIC_AMPLITUDE_KEY: process.env.NEXT_PUBLIC_AMPLITUDE_KEY,
  },
};

module.exports = nextConfig;
