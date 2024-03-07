// eslint-disable-next-line import/extensions
const { defineTest } = require('jscodeshift/dist/testUtils');

defineTest(__dirname, 'fileuploader-prop-names', null, 'fileuploader-prop-names', {
  parser: 'tsx',
  fixture: 'input',
  snapshot: true,
});
