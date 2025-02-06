import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    minify: true,
    lib: {
      entry: resolve(__dirname, '../../src/index.ts'),
      name: 'SpiritFormValidations',
      formats: ['es', 'cjs', 'umd'],
      fileName: (format) =>
        `${format === 'es' ? 'esm' : format}/spirit-form-validations${format === 'umd' ? '.min' : ''}.js`,
    },
    outDir: resolve(__dirname, '../../dist/bundles'),
    rollupOptions: {
      output: {
        // Include sourcemaps for unminified build
        sourcemap: true,
      },
    },
  },
});
