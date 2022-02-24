const { appRootPath } = require('@nrwl/tao/src/utils/app-root');

const configStorybook = require(`${appRootPath}/tools/config/webpack/storybook`);

module.exports = {
  stories: [],
  addons: ['@storybook/addon-a11y', '@storybook/addon-essentials'],
  webpackFinal: async (config) => configStorybook(config),
  core: {
    builder: 'webpack5',
  },
};
