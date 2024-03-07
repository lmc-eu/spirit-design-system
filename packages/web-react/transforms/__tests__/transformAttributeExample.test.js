const { defineTest } = require('jscodeshift/dist/testUtils');

defineTest(__dirname, 'transformAttributeExample', null, 'transformAttributeExample', {
  parser: 'tsx',
  fixture: 'input',
  snapshot: true,
});
