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
    loader: 'custom',
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'localhost:8080',
        port: '',
        pathname: '/img/**',
      }
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
      {
        protocol: 'https',
        hostname: 'blob:http://localhost:8080',
        port: '',
        pathname: '/**',
      },
    ],
  },
}
module.exports = nextConfig
