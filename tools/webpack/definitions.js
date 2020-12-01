const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

const tsPaths = new TsconfigPathsPlugin({
  configFile: './tsconfig.base.json',
});

const stylesWithPostcssRule = {
  test: /\.s?(a|c)ss$/,
  use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
};

const WEBFONTS_REGEX = /\.(woff(2)?|eot|ttf|otf)(\?v=\d+\.\d+\.\d+)?$/;

module.exports = {
  tsPaths,
  stylesWithPostcssRule,
  WEBFONTS_REGEX,
};
