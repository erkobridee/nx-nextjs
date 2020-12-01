const { appRootPath } = require('@nrwl/workspace/src/utils/app-root');
const configStorybook = require(`${appRootPath}/tools/webpack/config-storybook`);

/**
 * Export a function. Accept the base config as the only param.
 * @param {Object} options
 * @param {Required<import('webpack').Configuration>} options.config
 * @param {'DEVELOPMENT' | 'PRODUCTION'} options.mode - change the build configuration. 'PRODUCTION' is used when building the static version of storybook.
 */
module.exports = async ({ config, mode }) => {
  // Make whatever fine-grained changes you need

  config = configStorybook(config);

  // Return the altered config
  return config;
};
