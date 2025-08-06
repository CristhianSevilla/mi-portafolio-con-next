/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es'],
    localeDetection: false,
  },
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
