module.exports = {
  extends: ['eslint-config-spirit', '@lmc-eu/eslint-config-typescript', 'prettier'],

  parserOptions: {
    ecmaVersion: 'latest',
    project: './config/tsconfig.eslint.json',
  },
};
