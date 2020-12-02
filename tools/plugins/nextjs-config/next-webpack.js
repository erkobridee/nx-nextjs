/*
  the next nx plugin uses it
  https://github.com/nrwl/nx/blob/98ed4b1dc7579680e9d4bf63274375d2d25216dc/packages/next/plugins/with-nx.ts#L2

  source code
  https://github.com/nrwl/nx/blob/98ed4b1dc7579680e9d4bf63274375d2d25216dc/packages/workspace/src/utils/app-root.ts
*/
const { appRootPath } = require('@nrwl/workspace/src/utils/app-root');

const baseWebpackToolsPath = `${appRootPath}/tools/webpack`;
const definitions = require(`${baseWebpackToolsPath}/definitions`);
const utils = require(`${baseWebpackToolsPath}/utils`);

const DEFAULT_INLINE_FONT_LIMIT = 8192;

module.exports = (nextConfig = {}) => {
  const userWebpack = nextConfig.webpack || ((x) => x);
  return {
    ...nextConfig,
    webpack: (config, options) => {
      // const assetPrefix = nextConfig.assetPrefix || '';
      const limit = nextConfig.inlineFontLimit || DEFAULT_INLINE_FONT_LIMIT;

      const { WEBFONTS_REGEX, WEBFONTS_ISSUER_REGEX } = definitions;
      utils.addModuleRule(config, {
        test: WEBFONTS_REGEX,
        issuer: WEBFONTS_ISSUER_REGEX,
        loader: 'url-loader',
        options: {
          limit,
          fallback: 'file-loader',
          publicPath: '',
          name: '[name]-[hash].[ext]',
        },
      });

      return userWebpack(config, options);
    },
  };
};
