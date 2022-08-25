const withNx = require('@nrwl/next/plugins/with-nx');

const { workspaceRoot } = require('nx/src/utils/workspace-root');

const {
  definitions,
  utils,
} = require(`${workspaceRoot}/tools/config/webpack/helpers`);

module.exports = (nextConfig = {}) => {
  nextConfig = withNx(nextConfig);

  const userWebpack = nextConfig.webpack || ((x) => x);

  return {
    ...nextConfig,
    webpack: (config, options) => {
      utils.addResolveAlias(config, {
        // redefine the alias because the nextjs internally adds `./` to the CSS url() path
        [`./@nx-nextjs/shared/assets/fonts`]: `${workspaceRoot}/libs/shared/assets/fonts`,
      });

      utils.addModuleRule(config, definitions.webfontsNextjsAppRule);

      return userWebpack(config, options);
    },
  };
};
