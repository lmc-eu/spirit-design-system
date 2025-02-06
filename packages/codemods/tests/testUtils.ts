// eslint-disable-next-line import/extensions, @typescript-eslint/no-var-requires
const { defineTest } = require('jscodeshift/dist/testUtils');

export const testTransform = (directory: string, name: string) => {
  defineTest(directory, name, null, name, {
    parser: 'tsx',
    fixture: 'input',
    snapshot: true,
  });
};
