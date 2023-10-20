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
          entryFileNames: '[format]/[name].js',
        },
        {
          format: 'es',
          entryFileNames: 'esm/[name].js',
        },
        {
          name: 'spirit-design-tokens',
          format: 'umd',
          entryFileNames: '[format]/[name].js',
        },
      ],
    },
  },
});
