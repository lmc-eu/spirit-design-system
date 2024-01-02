import { SERVERS } from '@lmc-eu/spirit-common/constants/servers';
import react from '@vitejs/plugin-react';
import { readdirSync } from 'fs';
import { resolve } from 'path';
import { defineConfig } from 'vite';
import handlebars from 'vite-plugin-handlebars';
import { getNestedDirs } from '../../scripts/build';

const hiddenDemoComponents = ['Field', 'Dialog', 'Icon', 'NoSrr', 'TextFieldBase', 'VisuallyHidden'];

export default defineConfig({
  // Disable HMR overlay to avoid flaky screenshots in visual regression tests
  server: {
    hmr: {
      overlay: false,
    },
    ...SERVERS.DEVELOPMENT['web-react'],
  },
  plugins: [
    react(),
    handlebars({
      helpers: {
        eq: (variable, value) => variable === value,
      },
      partialDirectory: resolve(__dirname, '../../partials'),
      runtimeOptions: {
        data: {
          // Get the list of components directories and pass their names to the data
          components: [
            ...readdirSync('src/components', { withFileTypes: true })
              .filter((item) => item.isDirectory())
              .filter((item) => !hiddenDemoComponents.includes(item.name))
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
          resolve(__dirname, '../../../../node_modules'),
          resolve(__dirname, '../../../../node_modules/@lmc-eu/spirit-design-tokens/src/scss'),
        ],
      },
    },
  },
  build: {
    outDir: 'build',
    rollupOptions: {
      input: {
        main: resolve(__dirname, '../../index.html'),
        ...getNestedDirs('src/components', 'index.html'),
      },
      output: {
        entryFileNames: 'assets/spirit-web-react-entry.[hash].js',
        chunkFileNames: 'assets/spirit-web-react-chunk.[hash].js',
        assetFileNames: 'assets/spirit-web-react-asset.[hash].[ext]',
      },
    },
  },
});
