// eslint-disable-next-line import/extensions
const { defineTest } = require('jscodeshift/dist/testUtils');

defineTest(__dirname, 'button-text', null, 'button-text', {
  parser: 'tsx',
  fixture: 'input',
  snapshot: true,
});
