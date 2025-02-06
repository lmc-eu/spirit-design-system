const eslintConfig = require('eslint-config-spirit');

module.exports = {
  ...eslintConfig,

  ignorePatterns: [
    'node_modules',
    '!.*.js',
    'packages/analytics',
    'packages/common',
    'packages/design-tokens',
    'packages/web-react',
    'packages/web',
    'packages/form-validations',
    'packages/codemods',
    'exporters/scss',
    'exporters/js',
    'exporters/tokens',
    'examples/*'
  ],
};
