import { SERVERS } from '@lmc-eu/spirit-common/constants/servers';
import { resolve } from 'path';
import { defineConfig } from 'vite';
import handlebars from 'vite-plugin-handlebars';

export default defineConfig({
  server: SERVERS.DEVELOPMENT['form-validations'],
  plugins: [
    handlebars({
      partialDirectory: resolve(__dirname, '../../partials'),
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
      },
      output: {
        entryFileNames: `assets/spirit-form-validations-entry.[hash].js`,
        chunkFileNames: `assets/spirit-form-validations-chunk.[hash].js`,
        assetFileNames: `assets/spirit-form-validations-asset.[hash].[ext]`,
      },
    },
  },
});
