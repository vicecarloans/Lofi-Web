require("dotenv").config();
const path = require("path");
const withOffline = require("next-offline");
const withPlugins = require("next-compose-plugins");
const withSass = require("@zeit/next-sass");
const withLess = require("@zeit/next-less");
const withImages = require("next-images");

const baseConfig = {
  publicRuntimeConfig: {
    API_HOST: process.env.API_HOST,
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.node = {
        fs: "empty",
      };
    }
    return config;
  },
};

const plugins = [
  withSass,
  withLess({
    lessLoaderOptions: {
      javascriptEnabled: true,
      cssModules: true,
    },
  }),
  withImages,
  withOffline,
];

module.exports = withPlugins(plugins, baseConfig);
