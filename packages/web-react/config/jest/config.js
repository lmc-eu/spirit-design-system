const config = {
  // The root directory that Jest should scan for tests and modules within.
  // https://jestjs.io/docs/configuration#rootdir-string
  rootDir: '../../',

  // This option tells Jest that all imported modules in your tests should be mocked automatically.
  // https://jestjs.io/docs/configuration#automock-boolean
  automock: false,

  // Indicates whether each individual test should be reported during the run.
  // https://jestjs.io/docs/configuration#verbose-boolean
  verbose: false,

  // A list of paths to modules that run some code to configure or set up the testing environment.
  // https://jestjs.io/docs/configuration#setupfiles-array
  setupFiles: ['<rootDir>/config/jest/setup.js'],

  // A list of paths to modules that run some code to configure or set up the testing framework before each test file in the suite is executed.
  // https://jestjs.io/docs/configuration#setupfilesafterenv-array
  setupFilesAfterEnv: ['<rootDir>/config/jest/setupTestingLibrary.ts'],

  // A map from regular expressions to paths to transformers
  // https://jestjs.io/docs/configuration#transform-objectstring-pathtotransformer--pathtotransformer-object
  transform: {
    '^.+\\.(t|j)sx?$': ['<rootDir>/../../node_modules/@swc/jest'],
  },

  // This line is because of polyfill for useResizeHook
  // An array of regexp pattern strings that are matched against all source file paths before transformation.
  // https://jestjs.io/docs/configuration#transformignorepatterns-arraystring
  transformIgnorePatterns: ['<rootDir>/../../node_modules/@juggle/resize-observer'],

  // The test environment that will be used for testing.
  // https://jestjs.io/docs/configuration#testenvironment-string
  testEnvironment: 'jsdom',

  // An array of regexp pattern strings that are matched against all test paths before executing the test
  // https://jestjs.io/docs/configuration#testpathignorepatterns-arraystring
  testPathIgnorePatterns: ['<rootDir>/dist/', '<rootDir>/node_modules/', '.*__tests__/.*DataProvider.ts'],

  // The directory where Jest should output its coverage files.
  // https://jestjs.io/docs/configuration#coveragedirectory-string
  coverageDirectory: './.coverage',

  // An array of glob patterns indicating a set of files for which coverage information should be collected.
  // https://jestjs.io/docs/configuration#collectcoveragefrom-array
  collectCoverageFrom: ['<rootDir>/src/**/*.{js,jsx,ts,tsx}', '!<rootDir>/src/**/*.d.ts'],

  // An array of regexp pattern strings that are matched against all file paths before executing the test.
  // https://jestjs.io/docs/configuration#coveragepathignorepatterns-arraystring
  coveragePathIgnorePatterns: ['__fixtures__', '.*.stories.*', '/stories/.*'],

  // A list of reporter names that Jest uses when writing coverage reports. Any istanbul reporter can be used.
  // https://jestjs.io/docs/configuration#coveragereporters-arraystring--string-options
  coverageReporters: ['text', 'text-summary', ['lcov', { projectRoot: '../../' }]],

  // An array of regexp pattern strings that are matched against all module paths before those paths are 'visible' to the loader.
  // https://jestjs.io/docs/configuration#modulepathignorepatterns-arraystring
  modulePathIgnorePatterns: ['<rootDir>/dist'],
};

module.exports = config;
