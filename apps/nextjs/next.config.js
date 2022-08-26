const { workspaceRoot } = require('nx/src/utils/workspace-root');

const withNx = require(`${workspaceRoot}/tools/config/nextjs`)(__dirname);

module.exports = withNx({
  swcMinify: true,
  images: {
    // workaround for nx v11 bug
    disableStaticImages: true,
  },
});
