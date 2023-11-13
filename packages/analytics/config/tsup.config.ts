import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts', 'src/spirit-analytics.config.ts'],
  format: ['esm', 'cjs'],
  dts: true,
  splitting: true,
  clean: true,
});
