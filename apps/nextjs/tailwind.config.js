const { appRootPath } = require('@nrwl/tao/src/utils/app-root');

const {
  PURGE_MATCH_FILES,
} = require(`${appRootPath}/tools/config/tailwind/definitions`);
const configTailwind = require(`${appRootPath}/tools/config/tailwind`);

module.exports = configTailwind({
  purge: [`${__dirname}/src/${PURGE_MATCH_FILES}`],
});
