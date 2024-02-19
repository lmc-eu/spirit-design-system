const config = {
  // The root directory that Jest should scan for tests and modules within.
  // https://jestjs.io/docs/configuration#rootdir-string
  rootDir: '../',

  // This option tells Jest that all imported modules in your tests should be mocked automatically.
  // https://jestjs.io/docs/configuration#automock-boolean
  automock: false,

  // Indicates whether each individual test should be reported during the run.
  // https://jestjs.io/docs/configuration#verbose-boolean
  verbose: false,

  // A map from regular expressions to paths to transformers
  // https://jestjs.io/docs/configuration#transform-objectstring-pathtotransformer--pathtotransformer-object
  transform: {
    '^.+\\.(t|j)s?$': ['<rootDir>/../../node_modules/@swc/jest'],
  },

  // An array of regexp pattern strings that are matched against all test paths before executing the test
  // https://jestjs.io/docs/configuration#testpathignorepatterns-arraystring
  testPathIgnorePatterns: ['<rootDir>/dist/', '<rootDir>/node_modules/', '.*__tests__/.*DataProvider.ts'],

  // The directory where Jest should output its coverage files.
  // https://jestjs.io/docs/configuration#coveragedirectory-string
  coverageDirectory: './.coverage',

  // An array of glob patterns indicating a set of files for which coverage information should be collected.
  // https://jestjs.io/docs/configuration#collectcoveragefrom-array
  collectCoverageFrom: ['<rootDir>/src/**/*.{js,ts}', '!<rootDir>/src/**/*.d.ts'],

  // An array of regexp pattern strings that are matched against all file paths before executing the test.
  // https://jestjs.io/docs/configuration#coveragepathignorepatterns-arraystring
  coveragePathIgnorePatterns: ['__fixtures__', '__testfixtures__', 'bin'],

  // A list of reporter names that Jest uses when writing coverage reports. Any istanbul reporter can be used.
  // https://jestjs.io/docs/configuration#coveragereporters-arraystring--string-options
  coverageReporters: ['text', 'text-summary', ['lcov', { projectRoot: '../../' }]],

  // An array of regexp pattern strings that are matched against all source file paths before transformation.
  // https://jestjs.io/docs/configuration#transformignorepatterns-arraystring
  transformIgnorePatterns: ['<rootDir>/../../node_modules/zx'],

  // An array of regexp pattern strings that are matched against all module paths before those paths are 'visible' to the loader.
  // https://jestjs.io/docs/configuration#modulepathignorepatterns-arraystring
  modulePathIgnorePatterns: ['<rootDir>/dist/'],
};

export default config;
