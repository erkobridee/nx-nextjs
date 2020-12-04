const { appRootPath } = require('@nrwl/workspace/src/utils/app-root');
// const withNx = require(`${appRootPath}/tools/plugins/nextjs-config`)(__dirname);
const withNx = require(`${appRootPath}/tools/config/nextjs`)(__dirname);

module.exports = withNx({});
