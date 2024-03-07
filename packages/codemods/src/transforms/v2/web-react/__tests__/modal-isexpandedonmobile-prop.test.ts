// eslint-disable-next-line import/extensions
const { defineTest } = require('jscodeshift/dist/testUtils');

defineTest(__dirname, 'modal-isexpandedonmobile-prop', null, 'modal-isexpandedonmobile-prop', {
  parser: 'tsx',
  fixture: 'input',
  snapshot: true,
});
