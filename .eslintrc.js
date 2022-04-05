const { prettierConfig } = require('./.prettierrc');

module.exports = {
  root: true,

  parserOptions: {
    ecmaVersion: 'latest',
  },

  env: {
    browser: true,
    node: true
  },

  ignorePatterns: ['node_modules', '!.*.js', 'packages/web-react'],

  extends: [
    '@lmc-eu/eslint-config-react/base',
    '@lmc-eu/eslint-config-react/optional',
    'prettier',
    'plugin:prettier/recommended',
  ],

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
