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
            'Container',
            'Grid',
            'Header',
            'Icon',
            'Modal',
            'Pill',
            'Stack',
            'Tabs',
            'Tag',
            'TextField',
            'Tooltip',
          ],
          iconsCode: [
            'add',
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
          iconsDesign: [
            'check-checked',
            'check-indeterminate',
            'check-plain',
            'check-unchecked',
            'radio-checked',
            'radio-unchecked',
            'toggle-off',
            'toggle-on',
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
      },
      external: ['floating-ui-example.js'],
    },
  },
});
