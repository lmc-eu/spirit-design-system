const { prettierConfig } = require('./.prettierrc');

module.exports = {
  root: true,

  parserOptions: {
    ecmaVersion: 'latest',
  },

  env: {
    browser: true,
    node: true,
  },

  ignorePatterns: [
    'node_modules',
    '!.*.js',
    'packages/analytics',
    'packages/web-react',
    'packages/web',
    'packages/form-validations',
    'exporters/scss',
    'exporters/js',
  ],

  extends: ['@lmc-eu/eslint-config-react/base', '@lmc-eu/eslint-config-react/optional', 'prettier', 'plugin:prettier/recommended', 'plugin:storybook/recommended'],

  plugins: ['prettier'],

  rules: {
    'prettier/prettier': [
      'error',
      {
        ...prettierConfig,
      },
    ],
  },
};
