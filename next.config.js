/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    PREPR_ACCESS_TOKEN: process.env.PREPR_ACCESS_TOKEN,
  },
  images: {
    domains: [
      'demo-site-patterns.stream.prepr.io',
      'prepr-example-content-demo-patterns.stream.prepr.io',
      'prepr-example-show-content-demo-patterns.stream.prepr.io',
    ],
  },
};

module.exports = nextConfig;
