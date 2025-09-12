module.exports = {
  extends: [
    'eslint-config-spirit',
    '@lmc-eu/eslint-config-typescript',
    '@lmc-eu/eslint-config-jest',
    'eslint-config-spirit/prettier',
  ],

  parserOptions: {
    ecmaVersion: 'latest',
    project: './tsconfig.eslint.json',
  },

  rules: {
    // Better handling quotes with escaped strings inside
    // Double and backticks quotes are allowed when needed
    // @see { @link https://eslint.org/docs/latest/rules/quotes }
    quotes: ['warn', 'single', { avoidEscape: true }],

    // Conflicting with the Prettier configuration
    // @see https://eslint.org/docs/latest/rules/operator-linebreak
    'operator-linebreak': 'off',
  },
};
