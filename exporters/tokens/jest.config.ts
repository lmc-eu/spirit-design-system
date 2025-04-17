const config = {
  preset: 'jest-config-spirit/node',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  moduleNameMapper: {
    '^../../index$': '<rootDir>/src/index',
  },
};
export default config;
