const { definitions, utils } = require('./helpers');

module.exports = (config) => {
  utils.addResolvePlugin(config, definitions.tsPaths);
  utils.addModuleRule(config, definitions.stylesWithPostcssRule);
  utils.addModuleRule(config, definitions.webfontsStorybookRule);

  return config;
};
