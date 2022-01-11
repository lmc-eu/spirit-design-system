const config = {
  rootDir: '../../',
  automock: false,
  setupFiles: ['<rootDir>/config/jest/setup.js'],
  setupFilesAfterEnv: ['<rootDir>/config/jest/setupTestingLibrary.js'],
  testPathIgnorePatterns: ['<rootDir>/dist/', '<rootDir>/node_modules/'],
  coverageDirectory: './.coverage',
  reporters: [
    'default',
    [
      'jest-junit',
      {
        suiteName: 'jest tests',
        outputDirectory: './.coverage',
      },
    ],
  ],
  verbose: false,
  testURL: 'http://localhost/',
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': '<rootDir>/../../node_modules/babel-jest',
  },
};

module.exports = config;
