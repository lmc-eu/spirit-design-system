const { prettierConfig } = require('./.prettierrc');

module.exports = {
  parserOptions: {
    ecmaVersion: 'latest',
  },

  ignorePatterns: ['node_modules', '!.*.js', 'packages/web-react'],

  extends: [
    '@lmc-eu/eslint-config-base',
    '@lmc-eu/eslint-config-base/optional',
    'prettier',
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
