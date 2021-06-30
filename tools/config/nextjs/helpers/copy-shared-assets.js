const path = require('path');

/*
  the next nx plugin uses it
  https://github.com/nrwl/nx/blob/98ed4b1dc7579680e9d4bf63274375d2d25216dc/packages/next/plugins/with-nx.ts#L2

  source code
  https://github.com/nrwl/nx/blob/98ed4b1dc7579680e9d4bf63274375d2d25216dc/packages/workspace/src/utils/app-root.ts
*/
const { appRootPath } = require('@nrwl/tao/src/utils/app-root');

const { copySync } = require(`${appRootPath}/tools/scripts/libs/fs-toolkit`);

const FAVICON_FILENAME = 'favicon.ico';
const SHARED_ASSETS_LIB_PATH = path.resolve(appRootPath, 'libs/shared/assets');

const doCopy = (src, dest) => copySync(src, dest, { overwrite: true });

const copyAssets = (projectDirPath, toCopy = [FAVICON_FILENAME, 'images']) => {
  const projectPublicPath = path.resolve(projectDirPath, 'public');

  if (toCopy.includes(FAVICON_FILENAME)) {
    toCopy = toCopy.filter((item) => item !== FAVICON_FILENAME);
    doCopy(
      `${SHARED_ASSETS_LIB_PATH}/${FAVICON_FILENAME}`,
      `${projectPublicPath}/${FAVICON_FILENAME}`
    );
  }

  toCopy.forEach((item) =>
    doCopy(
      `${SHARED_ASSETS_LIB_PATH}/${item}`,
      `${projectPublicPath}/assets/${item}`
    )
  );
};

module.exports = copyAssets;
