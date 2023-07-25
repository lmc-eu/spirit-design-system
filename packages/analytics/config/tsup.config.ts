import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/**/*.ts', '!src/**/__tests__/*.ts', '!src/**/*.test.ts'],
  format: ['esm', 'cjs'],
  dts: true,
  splitting: false,
  clean: true,
});
