import type { StorybookViteConfig } from '@storybook/builder-vite';
import { dirname, join, resolve } from 'path';
import { mergeConfig } from 'vite';
import markdownRawPlugin from 'vite-raw-plugin';

const config: StorybookViteConfig = {
  stories: ['../../packages/**/*.mdx', '../../packages/**/*.stories.@(ts|tsx)'],

  addons: [getAbsolutePath('@storybook/addon-links'), getAbsolutePath('@storybook/addon-essentials')],

  features: {
    storyStoreV7: true,
  },

  core: {
    disableTelemetry: true,
  },

  async viteFinal(config) {
    // Merge custom configuration into the default config
    return mergeConfig(config, {
      plugins: [
        markdownRawPlugin({
          fileRegex: /\.md$/,
        }),
      ],
      css: {
        postcss: resolve(__dirname, 'config'),
        preprocessorOptions: {
          scss: {
            includePaths: [
              resolve(__dirname, '../../node_modules'),
              resolve(__dirname, '../../node_modules/@lmc-eu/spirit-design-tokens/src/scss'),
            ],
          },
        },
      },
    });
  },

  framework: {
    name: getAbsolutePath('@storybook/react-vite'),
    options: {},
  },

  docs: {
    autodocs: true,
    defaultName: 'Overview',
  },
};

export default config;

function getAbsolutePath(value: string): any {
  return dirname(require.resolve(join(value, 'package.json')));
}
