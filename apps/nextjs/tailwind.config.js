const path = require('path');
const rootConfig = require('../../tailwind.config.js');

const matchForFiles = '**/*!(spec|stories).{jsx,tsx}';
const localContent = `${__dirname}/src/${matchForFiles}`;
const sharedComponentsContent = `${path.resolve(
  __dirname,
  '../../',
  'libs/shared/components'
)}/src/${matchForFiles}`;

const localConfig = Object.assign(rootConfig, {
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: [localContent, sharedComponentsContent],
  },
});

module.exports = localConfig;
