/** @type {import('next').NextConfig} */
const { i18n } = require('./next-i18next.config')

const nextConfig = {
  i18n: i18n,
  reactStrictMode: true,
  env: {},
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    })

    return config
  },
  images: {
    domains: [
      'localhost',
      'flowstep.co',
      'schoolify-files-demo.s3.eu-central-1.amazonaws.com',
      'flowstep.s3.eu-north-1.amazonaws.com',
    ],
  },
}

module.exports = nextConfig
