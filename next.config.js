/** @type {import('next').NextConfig} */
// eslint-disable-next-line @typescript-eslint/no-var-requires, no-undef
const withPWA = require('next-pwa')
// eslint-disable-next-line no-undef
const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true
}

// eslint-disable-next-line no-undef
module.exports = withPWA({
  pwa: {
    dest: 'public',
    disable: !isProd
  }
})
