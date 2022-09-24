/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images:{
    domains: ['static.coingecko.com']
  }
}

module.exports = nextConfig
