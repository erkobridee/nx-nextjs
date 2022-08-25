const { workspaceRoot } = require('nx/src/utils/workspace-root');

const {
  PURGE_MATCH_FILES,
} = require(`${workspaceRoot}/tools/config/tailwind/definitions`);
const configTailwind = require(`${workspaceRoot}/tools/config/tailwind`);

module.exports = configTailwind({
  content: [`${__dirname}/src/${PURGE_MATCH_FILES}`],
});
