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

  ignorePatterns: ['node_modules', '!.*.js', 'packages/web-react', 'packages/web', 'packages/form-validations', 'exporters/scss'],

  extends: [
    '@lmc-eu/eslint-config-react/base',
    '@lmc-eu/eslint-config-react/optional',
    'prettier',
    'plugin:prettier/recommended',
  ],

  plugins: ['prettier', 'check-file'],

  rules: {
    'prettier/prettier': [
      'error',
      {
        ...prettierConfig,
      },
    ],
    'check-file/folder-match-with-fex': [
      'error',
      {
        '*.test.{js,jsx,ts,tsx}': '**/__tests__/',
      }
    ],
    'check-file/filename-naming-convention': [
      'error',
      {
        '**/*.{!test,jsx,tsx}': 'PASCAL_CASE',
      }
    ],
    'check-file/folder-naming-convention': [
      'error',
      {
        'src/*/': 'FLAT_CASE',
      }
    ],
  },
};
