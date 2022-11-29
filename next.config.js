/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    newNextLinkBehavior: true,
    scrollRestoration: true,
  },
}
module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'http://localhost:8080',
        port: '',
        pathname: '/img/**',
      },
    ],
  },
  audio: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'http://localhost:8080',
        port: '',
        pathname: '/audio/**',
      },
    ],
  },
}
module.exports = nextConfig
