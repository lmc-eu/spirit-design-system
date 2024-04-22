import { readdirSync } from 'fs';
import { join, resolve } from 'path';
import { defineConfig } from 'vite';
import handlebars from 'vite-plugin-handlebars';
import { getNestedDirs, mapKeys } from '../../scripts/prepareDist';
import { getListOfIcons, getListOfNestedDirectories } from '../../scripts/utils';

const pathRelativeToRepositoryRoot = resolve(__dirname, '../../../../');
const pathRelativeToPackageRoot = resolve(__dirname, '../../');

export default defineConfig({
  root: pathRelativeToRepositoryRoot,
  publicDir: join(pathRelativeToRepositoryRoot, 'static'),
  // Disable HMR overlay to avoid flaky screenshots in visual regression tests
  server: {
    hmr: {
      overlay: false,
    },
    host: 'localhost',
    https: false,
    port: 3456,
    strictPort: true,
  },
  resolve: {
    alias: {
      '@lmc-eu/spirit-icons': join(pathRelativeToRepositoryRoot, 'packages/icons/dist'),
    },
  },
  plugins: [
    handlebars({
      partialDirectory: [
        join(pathRelativeToPackageRoot, 'partials'),
        join(pathRelativeToRepositoryRoot, 'packages/web/partials'),
        join(pathRelativeToRepositoryRoot, 'packages/web-react/partials'),
      ],
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
      runtimeOptions: {
        data: {
          // Get the list of components directories and pass their names to the data
          components: getListOfNestedDirectories('../../packages/web/src/scss/components', 'index.html'),
          // Get the list of helpers directories and pass their names to the data
          helpers: getListOfNestedDirectories('../../packages/web/src/scss/helpers', 'index.html'),
          // Get the list of icons files from the icons package and pass their names to the data without their extensions
          icons: getListOfIcons('../../packages/icons/src/svg'),
          // Get the list of components directories and pass their names to the data
          web_react_components: [
            ...readdirSync('../../packages/web-react/src/components', { withFileTypes: true })
              .filter((item) => item.isDirectory())
              .filter((item) =>
                readdirSync(`../../packages/web-react/src/components/${item.name}`).includes('index.html'),
              )
              .map((item) => item.name),
          ],
        },
      },
    }),
  ],
  css: {
    postcss: resolve(__dirname, 'config'),
    preprocessorOptions: {
      scss: {
        includePaths: [
          join(pathRelativeToRepositoryRoot, 'node_modules'),
          join(pathRelativeToRepositoryRoot, 'node_modules/@lmc-eu/spirit-design-tokens/src/scss'),
        ],
      },
    },
  },
  build: {
    outDir: 'apps/demo/build',
    rollupOptions: {
      input: {
        main: join(pathRelativeToRepositoryRoot, 'index.html'),
        web: join(pathRelativeToRepositoryRoot, 'packages/web/index.html'),
        ...mapKeys(getNestedDirs('../../packages/web/src/scss/components', 'index.html'), (key) => `web-${key}`),
        webIcons: join(pathRelativeToRepositoryRoot, 'packages/web/src/icons/index.html'),
        webHelpersMain: join(pathRelativeToRepositoryRoot, 'packages/web/src/scss/helpers/index.html'),
        ...mapKeys(getNestedDirs('../../packages/web/src/scss/helpers', 'index.html'), (key) => `web-helpers-${key}`),
        webReactMain: join(pathRelativeToRepositoryRoot, 'packages/web-react/index.html'),
        ...mapKeys(getNestedDirs('../../packages/web-react/src/components', 'index.html'), (key) => `web-react-${key}`),
        webReactIcons: join(pathRelativeToRepositoryRoot, 'packages/web-react/src/icons/index.html'),
      },
      output: {
        entryFileNames: `assets/spirit-entry.[hash].js`,
        chunkFileNames: `assets/spirit-chunk.[hash].js`,
        assetFileNames: `assets/spirit-asset.[hash].[ext]`,
      },
      external: ['floating-ui-example.js'],
    },
  },
});
