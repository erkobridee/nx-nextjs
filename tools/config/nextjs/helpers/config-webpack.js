const withNx = require('@nrwl/next/plugins/with-nx');

/*
  the next nx plugin uses it
  https://github.com/nrwl/nx/blob/98ed4b1dc7579680e9d4bf63274375d2d25216dc/packages/next/plugins/with-nx.ts#L2

  source code
  https://github.com/nrwl/nx/blob/98ed4b1dc7579680e9d4bf63274375d2d25216dc/packages/workspace/src/utils/app-root.ts
*/
const { appRootPath } = require('@nrwl/workspace/src/utils/app-root');

const {
  definitions,
  utils,
} = require(`${appRootPath}/tools/config/webpack/helpers`);

module.exports = (nextConfig = {}) => {
  nextConfig = withNx(nextConfig);

  const userWebpack = nextConfig.webpack || ((x) => x);

  return {
    ...nextConfig,
    webpack: (config, options) => {
      utils.addResolveAlias(config, {
        // redefine the alias because the nextjs internally adds `./` to the CSS url() path
        [`./@nx-nextjs/shared/assets/fonts`]: `${appRootPath}/libs/shared/assets/fonts`,
      });

      utils.addModuleRule(config, definitions.webfontsNextjsAppRule);

      return userWebpack(config, options);
    },
  };
};
