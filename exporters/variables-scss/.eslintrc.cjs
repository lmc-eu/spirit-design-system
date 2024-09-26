module.exports = {
  extends: ['../../.eslintrc', '@lmc-eu/eslint-config-typescript', '@lmc-eu/eslint-config-jest'],

  parserOptions: {
    ecmaVersion: 'latest',
    project: './tsconfig.eslint.json',
  },

  rules: {
    // Conflicting with the Prettier configuration fo the line length
    // We are leaving this up to developer to decide where to use braces and where implicit return
    // @see { @link https://eslint.org/docs/latest/rules/arrow-body-style }
    'arrow-body-style': 'off',

    // Better handling quotes with escaped strings inside
    // Double and backticks quotes are allowed when needed
    // @see { @link https://eslint.org/docs/latest/rules/quotes }
    quotes: ['warn', 'single', { avoidEscape: true }],
  },
};
