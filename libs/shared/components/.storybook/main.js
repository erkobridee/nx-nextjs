const rootMain = require('../../../../.storybook/main');
const {
  addons: rootAddons,
  stories: rootStories,
  webpackFinal: rootWebpackFinal,
} = rootMain;

module.exports = {
  ...rootMain,

  addons: [...rootAddons],

  core: { ...rootMain.core, builder: 'webpack5' },
  stories: [
    ...rootStories,
    '../src/lib/**/*.stories.mdx',
    '../src/lib/**/*.stories.@(js|jsx|ts|tsx)',
  ],

  webpackFinal: async (config) => {
    config = await rootWebpackFinal(config);

    // Found this here: https://github.com/nrwl/nx/issues/2859
    // And copied the part of the solution that made it work

    const svgRuleIndex = config.module.rules.findIndex((rule) => {
      const { test } = rule;

      return test.toString().startsWith('/\\.(svg|ico');
    });

    config.module.rules[svgRuleIndex].test =
      /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|cur|ani|pdf)(\?.*)?$/;

    config.module.rules.push(
      {
        test: /\.(png|jpe?g|gif|webp)$/,
        loader: require.resolve('url-loader'),
        options: {
          limit: 10000, // 10kB
          name: '[name].[hash:7].[ext]',
        },
      },
      {
        test: /\.svg$/,
        oneOf: [
          // If coming from JS/TS file, then transform into React component using SVGR.
          {
            issuer: {
              and: [/\.[jt]sx?$/],
            },
            use: [
              '@svgr/webpack?-svgo,+titleProp,+ref![path]',
              {
                loader: require.resolve('url-loader'),
                options: {
                  limit: 10000, // 10kB
                  name: '[name].[hash:7].[ext]',
                  esModule: false,
                },
              },
            ],
          },
          // Fallback to plain URL loader.
          {
            use: [
              {
                loader: require.resolve('url-loader'),
                options: {
                  limit: 10000, // 10kB
                  name: '[name].[hash:7].[ext]',
                },
              },
            ],
          },
        ],
      }
    );

    return config;
  },
};
