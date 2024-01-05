import { resolve } from 'path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

export default defineConfig({
  plugins: [
    dts({
      insertTypesEntry: true,
      rollupTypes: false,
      outDir: 'types',
    }),
  ],
  build: {
    outDir: resolve(__dirname, './'),
    lib: {
      entry: resolve(__dirname, 'src/js/index.ts'),
      name: 'spirit-design-tokens',
      fileName: 'index',
    },
    rollupOptions: {
      output: [
        {
          format: 'cjs',
          dir: 'cjs',
          entryFileNames: '[name].js',
        },
        {
          format: 'es',
          dir: 'esm',
          entryFileNames: '[name].js',
        },
        {
          name: 'spirit-design-tokens',
          format: 'umd',
          dir: 'umd',
          entryFileNames: '[name].js',
        },
      ],
    },
  },
});
