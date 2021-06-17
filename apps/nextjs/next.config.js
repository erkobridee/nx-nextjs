const { appRootPath } = require('@nrwl/workspace/src/utils/app-root');
const withNx = require(`${appRootPath}/tools/config/nextjs`)(__dirname);

module.exports = withNx({
  images: {
    // workaround for nx v11 bug
    disableStaticImages: true,
  },
});
