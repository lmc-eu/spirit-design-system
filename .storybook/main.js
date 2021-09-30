const path = require('path');

module.exports = {
  "stories": [
    "../packages/**/*.stories.mdx",
    "../packages/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials"
  ],
  babel: async (options) => ({
    ...options,
    "presets": ["@babel/preset-react"],
  }),
  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.scss$/,
      use: ['style-loader', 'css-loader', {
        loader: 'sass-loader',
        options: {
          sassOptions: {
            includePaths: [
              path.resolve(__dirname, '../packages/design-tokens/src/default/scss'),
              path.resolve(__dirname, '../packages/web/src/themes/default'),
            ]
          }
        }
      }]
    });

    return config;
  },
}
