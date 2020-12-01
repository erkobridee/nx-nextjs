const reactWebpackConfig = require('@nrwl/react/plugins/webpack');

/*
  the next nx plugin uses it
  https://github.com/nrwl/nx/blob/98ed4b1dc7579680e9d4bf63274375d2d25216dc/packages/next/plugins/with-nx.ts#L2

  source code
  https://github.com/nrwl/nx/blob/98ed4b1dc7579680e9d4bf63274375d2d25216dc/packages/workspace/src/utils/app-root.ts
*/
const { appRootPath } = require('@nrwl/workspace/src/utils/app-root');
const configReactApp = require(`${appRootPath}/tools/webpack/config-react-app`);

const extendsWebpackConfig = (config) =>
  configReactApp(reactWebpackConfig(config));

module.exports = extendsWebpackConfig;
