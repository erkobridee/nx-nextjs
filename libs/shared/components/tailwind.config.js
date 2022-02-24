const rootConfig = require('../../../tailwind.config.js');

const rootContent = rootConfig.content;

const localConfig = Object.assign(rootConfig, {
  content: [...rootContent, `${__dirname}/src/**/*!(spec).{jsx,tsx}`],
});

module.exports = localConfig;
