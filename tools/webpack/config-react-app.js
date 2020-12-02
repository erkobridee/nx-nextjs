const definitions = require('./definitions');
const utils = require('./utils');

module.exports = (config) => {
  rulesWithoutStyles = utils.removeStylesFromRules(config);

  config.module.rules = [
    ...rulesWithoutStyles,
    definitions.stylesWithPostcssRule,
    definitions.webfontsReactAppRule,
  ];

  return config;
};
