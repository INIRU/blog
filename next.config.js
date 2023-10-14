/** @type {import('next').NextConfig} */
const removeImports = require('next-remove-imports')();

const nextConfig = removeImports({
  reactStrictMode: true,
  images: {
    minimumCacheTTL: 60,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'simpleicons.org',
        port: '',
        pathname: '/**',
      },
    ],
  },
});

module.exports = nextConfig;
