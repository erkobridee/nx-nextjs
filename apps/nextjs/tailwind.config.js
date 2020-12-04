/*
  the next nx plugin uses it
  https://github.com/nrwl/nx/blob/98ed4b1dc7579680e9d4bf63274375d2d25216dc/packages/next/plugins/with-nx.ts#L2

  source code
  https://github.com/nrwl/nx/blob/98ed4b1dc7579680e9d4bf63274375d2d25216dc/packages/workspace/src/utils/app-root.ts
*/
const { appRootPath } = require('@nrwl/workspace/src/utils/app-root');

const {
  PURGE_MATCH_FILES,
} = require(`${appRootPath}/tools/config/tailwind/definitions`);
const configTailwind = require(`${appRootPath}/tools/config/tailwind`);

module.exports = configTailwind({
  purge: [`${__dirname}/src/${PURGE_MATCH_FILES}`],
});
