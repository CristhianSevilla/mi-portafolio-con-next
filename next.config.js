/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = nextConfig

const path = require('path');

module.exports = {
  webpack: (config, { isServer }) => {
    // Configuración personalizada de Webpack
    config.resolve.alias['@config'] = path.join(__dirname, 'config');
    config.resolve.alias['fs'] = path.join(__dirname, 'config', 'empty.js');

    // Otros ajustes de configuración de Webpack, si los tienes

    return config;
  },
};

