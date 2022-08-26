const { workspaceRoot } = require('nx/src/utils/workspace-root');

const configStorybook = require(`${workspaceRoot}/tools/config/webpack/storybook`);

module.exports = {
  stories: [],
  addons: ['@storybook/addon-a11y', '@storybook/addon-essentials'],
  webpackFinal: async (config) => configStorybook(config),
  core: {
    builder: 'webpack5',
  },
};
