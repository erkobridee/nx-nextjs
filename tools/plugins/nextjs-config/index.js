const withNx = require('@nrwl/next/plugins/with-nx');

const copyAssets = require('./copy-shared-assets');
const nextWebpack = require('./next-webpack');

const extendsNextjsConfig = (projectDirPath, toCopy) => {
  copyAssets(projectDirPath, toCopy);
  return (nextConfig = {}) => nextWebpack(withNx(nextConfig));
};

module.exports = extendsNextjsConfig;
