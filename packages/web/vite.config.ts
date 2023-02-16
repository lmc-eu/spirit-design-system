import { readdirSync } from 'fs';
import { resolve } from 'path';
import { defineConfig } from 'vite';
import handlebars from 'vite-plugin-handlebars';
import { getNestedDirs } from './scripts/prepareDist';

export default defineConfig({
  plugins: [
    handlebars({
      helpers: {
        setVar: (...data) => {
          const varName = data.shift();
          const options = data.pop();
          if (!options.data.root) {
            options.data.root = {};
          }
          options.data.root[varName] = data;
        },
        eq: (variable, value) => variable === value,
      },
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
  build: {
    outDir: 'build',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        ...getNestedDirs('src/scss/components', 'index.html'),
        helpers: resolve(__dirname, 'src/scss/helpers/index.html'),
        icons: resolve(__dirname, 'src/icons/index.html'),
      },
      output: {
        entryFileNames: `assets/spirit-web-entry.[hash].js`,
        chunkFileNames: `assets/spirit-web-chunk.[hash].js`,
        assetFileNames: `assets/spirit-web-asset.[hash].[ext]`,
      },
      external: ['floating-ui-example.js'],
    },
  },
});
