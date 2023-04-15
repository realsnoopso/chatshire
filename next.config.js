/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  publicRuntimeConfig: {
    FLIPSIDE_API_KEY: process.env.FLIPSIDE_API_KEY,
    OPENAI_API_KEY: process.env.OPENAI_API_KEY,
    AMPLITUDE_KEY: process.env.AMPLITUDE_KEY,
  },
};

module.exports = nextConfig;
