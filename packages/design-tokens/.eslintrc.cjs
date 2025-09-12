module.exports = {
  extends: ['eslint-config-spirit', '@lmc-eu/eslint-config-typescript', 'eslint-config-spirit/prettier'],

  parserOptions: {
    ecmaVersion: 'latest',
    project: './tsconfig.eslint.json',
  },

  rules: {
    'prettier/prettier': 'off',
    'operator-linebreak': 'off',
  },
};
