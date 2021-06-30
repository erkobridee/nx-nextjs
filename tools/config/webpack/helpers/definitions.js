const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

const tsPaths = new TsconfigPathsPlugin({
  configFile: './tsconfig.base.json',
});

const stylesWithPostcssRule = {
  test: /\.s?(a|c)ss$/,
  use: [
    'style-loader',
    'css-loader',
    {
      loader: 'postcss-loader',
      options: { implementation: require('postcss') },
    },
    'sass-loader',
  ],
};

const WEBFONTS_REGEX = /\.(woff(2)?|eot|ttf|otf)(\?v=\d+(\.\d+(\.\d+)?)?)?$/;
const WEBFONTS_ISSUER_REGEX = /\.\w+(?<!(s?c|sa)ss)$/i;

const webfontsReactAppRule = {
  test: WEBFONTS_REGEX,
  use: {
    loader: 'file-loader',
    options: {
      name: '[name]-[hash].[ext]',
      outputPath: 'assets/fonts/',
      esModule: false,
    },
  },
};

const webfontsNextjsAppRule = {
  test: WEBFONTS_REGEX,
  issuer: WEBFONTS_ISSUER_REGEX,
  use: {
    loader: 'file-loader',
    options: {
      name: '[name]-[hash].[ext]',
      esModule: false,
    },
  },
};

const webfontsStorybookRule = {
  test: WEBFONTS_REGEX,
  issuer: WEBFONTS_ISSUER_REGEX,
  use: {
    loader: 'file-loader',
    options: {
      name: '[name]-[hash].[ext]',
      esModule: false,
    },
  },
};

module.exports = {
  tsPaths,
  stylesWithPostcssRule,
  webfontsReactAppRule,
  webfontsNextjsAppRule,
  webfontsStorybookRule,
  WEBFONTS_REGEX,
  WEBFONTS_ISSUER_REGEX,
};
