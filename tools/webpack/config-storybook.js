const definitions = require('./definitions');
const utils = require('./utils');

module.exports = (config) => {
  utils.addResolvePlugin(config, definitions.tsPaths);
  utils.addModuleRule(config, definitions.stylesWithPostcssRule);
  return config;
};
