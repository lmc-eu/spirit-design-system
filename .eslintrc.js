module.exports = {
  extends: ['eslint-config-spirit'],

  ignorePatterns: [
    'node_modules',
    '!.*.js',
    'packages/analytics',
    'packages/codemods',
    'packages/common',
    'packages/design-tokens',
    'packages/form-validations',
    'packages/icons',
    'packages/web-react',
    'packages/web',
    'exporters/js',
    'exporters/scss',
    'exporters/tokens',
    'examples/*'
  ],
};
