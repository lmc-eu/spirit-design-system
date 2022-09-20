import { readdirSync } from 'fs';
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
          // Get the list of components directories and pass their names to the data
          components: [
            ...readdirSync('src/scss/components', { withFileTypes: true })
              .filter((item) => item.isDirectory())
              .map((item) => item.name),
          ],
          // Get the list of icons files from the icons package and pass their names to the data without their extensions
          icons: [...readdirSync('../icons/src/svg', { withFileTypes: true }).map((item) => item.name.slice(0, -4))],
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
