/* eslint-disable import/no-extraneous-dependencies */
const path = require('path');
const { babel } = require('@rollup/plugin-babel');
const { nodeResolve } = require('@rollup/plugin-node-resolve');
const replace = require('@rollup/plugin-replace');
const terser = require('@rollup/plugin-terser');
const typescript = require('@rollup/plugin-typescript');

const BUNDLE = process.env.BUNDLE === 'true';
const ESM = process.env.ESM === 'true';

let fileDestination = `spirit-web${ESM ? '.esm' : ''}`;
let fileDirectory = ESM ? 'esm' : 'cjs';

const plugins = [
  babel({
    // Only transpile our source code
    exclude: 'node_modules/**',
    // Include the helpers in the bundle, at most one copy of each
    babelHelpers: 'bundled',
  }),
  typescript({
    target: 'es6',
    compilerOptions: { rootDir: './src' },
    exclude: ['**/__tests__', '**/*.test.ts'],
    declaration: false,
  }),
];

if (BUNDLE) {
  fileDestination += '.bundle';
  fileDirectory = 'bundle';

  plugins.push(
    replace({
      'process.env.NODE_ENV': '"production"',
      preventAssignment: true,
    }),
    nodeResolve(),
  );
}

const filePath = `../dist/js/${fileDirectory}/${fileDestination}`;
const format = ESM ? 'esm' : 'umd';

const outputConfig = {
  format,
  globals: {},
  generatedCode: 'es2015',
  sourcemap: true,
};

if (!ESM) {
  outputConfig.name = 'spirit-web';
}

const rollupConfig = {
  input: path.resolve(__dirname, `../src/js/index.${format}.ts`),
  output: [
    {
      file: path.resolve(__dirname, `${filePath}.js`),
      ...outputConfig,
    },
    {
      file: path.resolve(__dirname, `${filePath}.min.js`),
      plugins: [terser()],
      ...outputConfig,
    },
  ],
  external: {},
  plugins,
};

module.exports = rollupConfig;
