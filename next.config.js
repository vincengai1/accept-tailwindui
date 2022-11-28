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
}
module.exports = nextConfig
