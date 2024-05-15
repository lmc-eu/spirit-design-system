import { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';
// eslint-disable-next-line import/extensions
import { config as nodeConfig } from '../node/index.js';

// eslint-disable-next-line no-underscore-dangle
const __filename = fileURLToPath(import.meta.url);
// eslint-disable-next-line no-underscore-dangle
const __dirname = dirname(__filename);

export const config = {
  ...nodeConfig,

  // The test environment that will be used for testing.
  // https://jestjs.io/docs/configuration#testenvironment-string
  testEnvironment: 'jsdom',

  // A list of paths to modules that run some code to configure or set up the testing framework before each test file in the suite is executed.
  // https://jestjs.io/docs/configuration#setupfilesafterenv-array
  setupFilesAfterEnv: [resolve(__dirname, './setup/setupAfterEnv.js')],

  // This line is because of polyfill for useResizeHook
  // An array of regexp pattern strings that are matched against all source file paths before transformation.
  // https://jestjs.io/docs/configuration#transformignorepatterns-arraystring
  transformIgnorePatterns: ['<rootDir>/../../node_modules/@juggle/resize-observer'],
};
