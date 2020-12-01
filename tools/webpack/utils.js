/*
  types definitions for webpack
  https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/webpack
*/

const addResolvePlugin = (config, plugin) => {
  config.resolve.plugins
    ? config.resolve.plugins.push(plugin)
    : (config.resolve.plugins = [plugin]);
};

const addModuleRule = (config, rule) => {
  config.module.rules
    ? config.module.rules.push(rule)
    : (config.module.rules = [rule]);
};

const removeStylesFromRules = (config) => {
  // it's needed to remove the default styles configuration from
  // the nx workspace to avoid compilation error
  const IGNORE_REGEX_STR = String(/\.css$|\.scss$|\.sass$|\.less$|\.styl$/);
  const rulesWithoutStyles = config.module.rules.filter(
    (rule) => String(rule.test) !== IGNORE_REGEX_STR
  );
  return rulesWithoutStyles;
};

module.exports = {
  addResolvePlugin,
  addModuleRule,
  removeStylesFromRules,
};
