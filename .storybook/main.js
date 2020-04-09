const webpack = require('webpack');

module.exports = {
  stories: ['../src/**/*.stories.js'],
  addons: ['@storybook/addon-actions', '@storybook/addon-links'],
  webpackFinal: async (config, { configType }) => {
      config.plugins.push(new webpack.HotModuleReplacementPlugin());

      return config;
  }
};
