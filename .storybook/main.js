const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");

module.exports = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)", "../src/**/*.story.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-a11y",
    "storybook-addon-themes",
    "storybook-addon-pseudo-states",
    "@chromatic-com/storybook",
  ],

  framework: {
    name: "@storybook/nextjs",
    options: {},
  },

  webpackFinal: async (config, { configType }) => {
    config.resolve.plugins = [new TsconfigPathsPlugin()];
    return config;
  },

  docs: {},

  typescript: {
    reactDocgen: "react-docgen-typescript",
  },
};
