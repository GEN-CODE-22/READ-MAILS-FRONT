/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    URL_SERVER: process.env.URL_SERVER,
  },
};

module.exports = nextConfig;
