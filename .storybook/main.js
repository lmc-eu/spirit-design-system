const { resolve } = require('path');
const { mergeConfig } = require('vite');

module.exports = {
  stories: [
    '../packages/**/*.stories.mdx',
    '../packages/**/*.stories.@(js|jsx|ts|tsx)'
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-docs',
    '@storybook/addon-essentials',
  ],
  features: {
    storyStoreV7: true,
  },
  core: {
    builder: '@storybook/builder-vite'
  },

  async viteFinal(config) {
    // Merge custom configuration into the default config
    return mergeConfig(config, {
      css: {
        postcss: resolve(__dirname, 'config'),
        preprocessorOptions: {
          scss: {
            includePaths: [
              resolve(__dirname, '../node_modules'),
              resolve(__dirname, '../node_modules/@lmc-eu/spirit-design-tokens/src/scss'),
            ],
          },
        },
      },
    });
  },
};
