const { workspaceRoot } = require('nx/src/utils/workspace-root');

const { definitions, utils } = require('./helpers');

module.exports = (config) => {
  utils.addResolvePlugin(config, definitions.tsPaths);
  utils.addModuleRule(config, definitions.stylesWithPostcssRule);
  utils.addModuleRule(config, definitions.webfontsStorybookRule);

  utils.addResolveAlias(config, {
    // redefine the alias because the nextjs internally adds `./` to the CSS url() path
    [`./@nx-nextjs/shared/assets/fonts`]: `${workspaceRoot}/libs/shared/assets/fonts`,
  });

  return config;
};
