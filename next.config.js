require("dotenv").config();
const path = require("path");
const withOffline = require("next-offline");
const withPlugins = require("next-compose-plugins");
const withSass = require("@zeit/next-sass");
const withLess = require("@zeit/next-less");

const baseConfig = {
  distDir: "dist",
  publicRuntimeConfig: {
    API_HOST: process.env.API_HOST,
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.node = {
        fs: "empty",
      };
    }

    // Add an alias to clean up relative paths
    config.resolve.alias["~"] = path.resolve(__dirname, "src/");
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
  withOffline,
];

module.exports = withPlugins(plugins, baseConfig);
