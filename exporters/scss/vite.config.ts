import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/js/index.ts'),
      name: 'Functions',
      fileName: 'functions',
      formats: ['cjs'],
    },
    rollupOptions: {
      output: {
        dir: resolve(__dirname, './generated'),
        banner:
          '/**\n * THIS FILE IS GENERATED USING `build` SCRIPT\n * DO NOT EDIT MANUALLY\n * SEE CONTRIBUTING.md\n*/',
      },
    },
  },
});
