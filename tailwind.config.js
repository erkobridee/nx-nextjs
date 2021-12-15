const { PURGE_MATCH_FILES } = require('./tools/config/tailwind/definitions');

module.exports = {
  content: [`${__dirname}/libs/shared/components/src/${PURGE_MATCH_FILES}`],
  theme: {
    extend: {
      fontFamily: {
        'open-sans': ['Open Sans'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
