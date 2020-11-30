const rootConfig = require('../../../tailwind.config.js');

const localConfig = Object.assign(rootConfig, {
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: [`${__dirname}/src/**/*!(spec).{jsx,tsx}`],
  },
});

module.exports = localConfig;
