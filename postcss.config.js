const fs = require('fs');
const workspaceConfig = require('./workspace.json');

const TAILWIND_CONFIG_FILE = 'tailwind.config.js';

const PROCESS = process.argv[3];
const [project, runner] = PROCESS.split(':');

const STORYBOOK_REGEX = /storybook/gi;

let plugins = { autoprefixer: {} };

const projectConfig = workspaceConfig.projects[project];

if (
  projectConfig &&
  (STORYBOOK_REGEX.test(runner) || projectConfig.projectType === 'application')
) {
  let config = undefined;
  if (fs.existsSync(`${projectConfig.root}/${TAILWIND_CONFIG_FILE}`)) {
    config = `./${projectConfig.root}/${TAILWIND_CONFIG_FILE}`;
  } else if (fs.existsSync(TAILWIND_CONFIG_FILE)) {
    config = `./${TAILWIND_CONFIG_FILE}`;
  }

  if (config) {
    plugins = {
      'postcss-import': {},
      tailwindcss: { config: `${config}` },
      ...plugins,
    };
  }
}

module.exports = {
  plugins,
};
