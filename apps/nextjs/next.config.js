const { appRootPath } = require('@nrwl/workspace/src/utils/app-root');
const withNx = require(`${appRootPath}/tools/plugins/nextjs-config`)(__dirname);

module.exports = withNx({});
