const { copySharedAssets, configWebpack } = require('./helpers');

const extendsNextjsConfig = (projectDirPath, toCopy) => {
  copySharedAssets(projectDirPath, toCopy);
  return (nextConfig = {}) => configWebpack(nextConfig);
};

module.exports = extendsNextjsConfig;
