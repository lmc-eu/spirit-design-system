module.exports = {
  extends: ['eslint-config-spirit', '@lmc-eu/eslint-config-typescript'],

  parserOptions: {
    ecmaVersion: 'latest',
    project: './tsconfig.eslint.json',
  },

  rules: {
    'prettier/prettier': 'off',
    'operator-linebreak': 'off',
  },
};
