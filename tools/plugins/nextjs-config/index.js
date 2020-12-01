const withNx = require('@nrwl/next/plugins/with-nx');

const copyAssets = require('./copy-shared-assets');

const extendsNextjsConfig = (projectDirPath, toCopy) => {
  copyAssets(projectDirPath, toCopy);
  return (nextConfig = {}) => withNx(nextConfig);
};

module.exports = extendsNextjsConfig;
