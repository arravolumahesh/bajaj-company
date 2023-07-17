/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ['en', 'hi'],
    defaultLocale: 'en',
    localeDetection: false,
  },
}

//module.exports = {nextConfig}
module.exports = {
  i18n: {
    locales: ['en', 'hi'],
    defaultLocale: 'en',
  },
  reactStrictMode:true
}
