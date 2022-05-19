import { defineConfig } from 'vite';
import { resolve } from 'path';
import handlebars from 'vite-plugin-handlebars';
import { getNestedDirs } from './scripts/prepareDist';

export default defineConfig({
  plugins: [
    handlebars({
      partialDirectory: resolve(__dirname, 'partials'),
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
      },
    },
  },
});
