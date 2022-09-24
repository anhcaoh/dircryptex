/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false, // Strict mode caused App rerender (API called twice) some reason
  swcMinify: true,
  images:{
    domains: ['static.coingecko.com']
  }
}

module.exports = nextConfig
