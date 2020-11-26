const withNx = require('@nrwl/next/plugins/with-nx');

// it's an internal dependency of the nx dev tools
// https://www.npmjs.com/package/tsconfig-paths-webpack-plugin
// const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

/*
  enable the use of absolute import paths and use the
  paths definitions from the root tsconfig
*/
// https://nextjs.org/docs/api-reference/next.config.js/custom-webpack-config

/*const configWebpack = (config) => {
  const tsPaths = new TsconfigPathsPlugin({
    configFile: './tsconfig.base.json',
  });

  // https://webpack.js.org/configuration/resolve/
  config.resolve.plugins
    ? config.resolve.plugins.push(tsPaths)
    : (config.resolve.plugins = [tsPaths]);

  return config;
};*/

module.exports = withNx({
  // webpack: configWebpack,
});
