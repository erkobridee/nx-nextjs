const { appRootPath } = require('@nrwl/tao/src/utils/app-root');
const withNx = require(`${appRootPath}/tools/config/nextjs`)(__dirname);

module.exports = withNx({
  swcMinify: true,
  images: {
    // workaround for nx v11 bug
    disableStaticImages: true,
  },
});
