module.exports = {
  extends: ['../../.eslintrc', '@lmc-eu/eslint-config-typescript', '@lmc-eu/eslint-config-jest'],

  parserOptions: {
    ecmaVersion: 'latest',
    project: './tsconfig.eslint.json',
  },

  rules: {
    'prettier/prettier': 'off',
    'operator-linebreak': 'off',
  },
};
