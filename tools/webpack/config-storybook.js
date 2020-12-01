const { appRootPath } = require('@nrwl/workspace/src/utils/app-root');

const definitions = require('./definitions');
const utils = require('./utils');

module.exports = (config) => {
  utils.addResolvePlugin(config, definitions.tsPaths);
  utils.addModuleRule(config, definitions.stylesWithPostcssRule);

  // TODO: review
  const { WEBFONTS_REGEX } = definitions;
  utils.addModuleRule(config, {
    test: WEBFONTS_REGEX,
    include: [`${appRootPath}/libs/shared/assets/fonts`],
    use: {
      loader: 'file-loader',
      options: {
        name: '[name].[ext]',
        outputPath: 'assets/fonts/',
        esModule: false,
      },
    },
  });

  return config;
};
