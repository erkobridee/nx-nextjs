const path = require('path');
const reactWebpackConfig = require('@nrwl/react/plugins/webpack');

module.exports = (config) => {
  // it's needed to remove the default styles configuration from
  // the nx workspace to avoid compilation error
  const IGNORE_REGEX_STR = String(/\.css$|\.scss$|\.sass$|\.less$|\.styl$/);
  const rulesWithoutStyles = config.module.rules.filter(
    (rule) => String(rule.test) !== IGNORE_REGEX_STR
  );

  config.module.rules = [
    ...rulesWithoutStyles,
    {
      test: /\.scss$/,
      use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
      include: path.resolve(__dirname, '../../'),
    },
  ];
  return reactWebpackConfig(config);
};
