import type { StorybookConfig } from '@storybook/react-vite';
import react from '@vitejs/plugin-react';
import { dirname, join, resolve } from 'path';
import { mergeConfig } from 'vite';
import markdownRawPlugin from 'vite-raw-plugin';

const config: StorybookConfig = {
  stories: ['../../packages/**/*.mdx', '../../packages/**/*.stories.@(ts|tsx)'],

  addons: [getAbsolutePath('@storybook/addon-links'), getAbsolutePath('@storybook/addon-essentials')],

  core: {
    disableTelemetry: true,
    builder: '@storybook/builder-vite',
    crossOriginIsolated: false,
  },

  async viteFinal(config) {
    // Merge custom configuration into the default config
    return mergeConfig(config, {
      plugins: [
        markdownRawPlugin({
          fileRegex: /\.md$/,
        }),
        react({
          jsxRuntime: 'automatic',
        }),
      ],
      css: {
        postcss: resolve(__dirname, 'config'),
        preprocessorOptions: {
          scss: {
            api: 'modern-compiler',
            loadPaths: [
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
    defaultName: 'Overview',
  },

  typescript: {
    reactDocgen: 'react-docgen-typescript',
  },
};

export default config;

function getAbsolutePath(value: string): any {
  return dirname(require.resolve(join(value, 'package.json')));
}
