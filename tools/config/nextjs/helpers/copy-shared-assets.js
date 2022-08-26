const path = require('path');

const { workspaceRoot } = require('nx/src/utils/workspace-root');

const { copySync } = require(`${workspaceRoot}/tools/scripts/libs/fs-toolkit`);

const FAVICON_FILENAME = 'favicon.ico';
const SHARED_ASSETS_LIB_PATH = path.resolve(
  workspaceRoot,
  'libs/shared/assets'
);

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
