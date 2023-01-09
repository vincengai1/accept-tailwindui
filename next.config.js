/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    newNextLinkBehavior: true,
    scrollRestoration: true,
    unoptimized: true,
  },
}

const withOptimizedImages = require('next-optimized-images');

module.exports = withOptimizedImages({
  
  handleImages: ['png'],
  audio: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'http://localhost:8080',
        port: '',
        pathname: '/audio/**',
      },
      {
        protocol: 'https',
        hostname: 'blob:http://localhost:8080',
        port: '',
        pathname: '/**',
      },
    ],
  },
})
module.exports = nextConfig
