import { resolve } from 'path';
import { defineConfig } from 'vite';
import handlebars from 'vite-plugin-handlebars';
import { SERVERS } from '../common/constants/servers';
import { getNestedDirs } from './scripts/prepareDist';
import { getListOfIcons, getListOfNestedDirectories } from './scripts/utils';

export default defineConfig({
  server: SERVERS.DEVELOPMENT.web,
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
          components: getListOfNestedDirectories('src/scss/components'),
          // Get the list of helpers directories and pass their names to the data
          helpers: getListOfNestedDirectories('src/scss/helpers'),
          // Get the list of icons files from the icons package and pass their names to the data without their extensions
          icons: getListOfIcons('../icons/src/svg'),
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
        ...getNestedDirs('src/scss/helpers', 'index.html'),
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
