const reactWebpackConfig = require('@nrwl/react/plugins/webpack');

const { definitions, utils } = require('./helpers');

module.exports = (config) => {
  config = reactWebpackConfig(config);

  rulesWithoutStyles = utils.removeStylesFromRules(config);

  config.module.rules = [
    ...rulesWithoutStyles,
    definitions.stylesWithPostcssRule,
    definitions.webfontsReactAppRule,
  ];

  return config;
};
