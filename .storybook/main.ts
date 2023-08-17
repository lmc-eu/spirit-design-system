import { resolve, dirname, join } from 'path';
import { mergeConfig } from 'vite';
import type { StorybookViteConfig } from '@storybook/builder-vite';

const config: StorybookViteConfig = {
  stories: ['../packages/**/*.stories.mdx', '../packages/**/*.stories.@(ts|tsx)'],

  addons: [
    getAbsolutePath('@storybook/addon-links'),
    getAbsolutePath('@storybook/addon-docs'),
    getAbsolutePath('@storybook/addon-essentials'),
    getAbsolutePath('@storybook/addon-mdx-gfm'),
  ],

  features: {
    storyStoreV7: true,
  },

  core: {
    disableTelemetry: true,
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
