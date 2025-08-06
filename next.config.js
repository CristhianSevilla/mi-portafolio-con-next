const { i18n } = require("./next-i18next.config");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n,
  experimental: {
    esmExternals: false,
  },
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
