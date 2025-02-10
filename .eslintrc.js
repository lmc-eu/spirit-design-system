module.exports = {
  extends: ['eslint-config-spirit'],

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
