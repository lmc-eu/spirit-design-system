const path = require('path');

module.exports = {
  stories: [
    '../packages/**/*.stories.mdx',
    '../packages/**/*.stories.@(js|jsx|ts|tsx)'
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-docs',
    '@storybook/addon-essentials',
    '@whitespace/storybook-addon-html',
  ],
  core: {
    builder: 'webpack5',
  },
  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.scss$/,
      use: [
        'style-loader',
        'css-loader',
        {
          loader: 'sass-loader',
          options: {
            sassOptions: {
              includePaths: [
                path.resolve(__dirname, '../node_modules'),
                path.resolve(__dirname, '../packages/design-tokens/src/scss'),
              ],
            },
          },
        },
      ],
    });

    config.module.rules.push({
      test: /\.m?js/,
      resolve: {
        fullySpecified: false,
      },
    });

    /**
     * Enable import of SVG files like React Components
     * eg.: import Icon from 'icon.svg'
     * and use as <Icon />
     */
    // Default rule for images /\.(svg|ico|jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|cur|ani|pdf)(\?.*)?$/
    const fileLoaderRule = config.module.rules.find(rule => rule.test && rule.test.test('.svg'));
    fileLoaderRule.exclude = /\.svg$/;

    config.module.rules.unshift({
      test: /\.svg$/,
      enforce: 'pre',
      use: ['@svgr/webpack'],
    });

    return config;
  },
};
