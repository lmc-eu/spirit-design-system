const prettierPlugin = require('./plugins/prettier');
const styleRules = require('./rules/style');
const unstableRules = require('./rules/unstable');

module.exports = {
  extends: ['@lmc-eu/stylelint-config', prettierPlugin, styleRules, unstableRules],
};
