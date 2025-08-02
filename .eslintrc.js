module.exports = {
  extends: ['eslint-config-spirit'],

  ignorePatterns: [
    '!.*.js',
    'examples/*',
    'exporters/js',
    'exporters/scss',
    'exporters/tokens',
    'node_modules',
    'packages/analytics',
    'packages/codemods',
    'packages/common',
    'packages/design-tokens',
    'packages/form-validations',
    'packages/icons',
    'packages/web-react',
    'packages/web'
  ],
};
