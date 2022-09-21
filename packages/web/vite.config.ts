import { resolve } from 'path';
import { defineConfig } from 'vite';
import handlebars from 'vite-plugin-handlebars';
import { getNestedDirs } from './scripts/prepareDist';

export default defineConfig({
  plugins: [
    handlebars({
      partialDirectory: resolve(__dirname, 'partials'),
      runtimeOptions: {
        data: {
          components: [
            'Alert',
            'Breadcrumbs',
            'Button',
            'CheckboxField',
            'Collapse',
            'Container',
            'Grid',
            'Header',
            'Modal',
            'Pill',
            'RadioField',
            'Stack',
            'Tabs',
            'Tag',
            'TextField',
            'Tooltip',
          ],
          icons: [
            'add',
            'check-plain',
            'chevron-down',
            'chevron-left',
            'chevron-right',
            'chevron-up',
            'close',
            'hamburger',
            'help',
            'info',
            'link',
            'more',
            'profile',
            'reload',
            'search',
            'visibility-off',
            'visibility-on',
            'warning',
          ],
        },
      },
    }),
  ],
  css: {
    preprocessorOptions: {
      scss: {
        includePaths: [
          resolve(__dirname, '../../node_modules'),
          resolve(__dirname, '../../node_modules/@lmc-eu/spirit-design-tokens/src/scss'),
        ],
      },
    },
  },
  build: {
    outDir: 'build',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        ...getNestedDirs('src/scss/components', 'index.html'),
        helpers: resolve(__dirname, 'src/scss/helpers/index.html'),
        icons: resolve(__dirname, 'src/icons/index.html'),
      },
      external: ['floating-ui-example.js'],
    },
  },
});
