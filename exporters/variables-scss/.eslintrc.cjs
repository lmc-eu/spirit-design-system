let prettierConfig;

(async () => {
  prettierConfig = (await import('prettier-config-spirit')).prettierConfig;
})();

module.exports = {
  extends: ['../../.eslintrc', '@lmc-eu/eslint-config-typescript', '@lmc-eu/eslint-config-jest'],

  parserOptions: {
    ecmaVersion: 'latest',
    project: './tsconfig.eslint.json',
  },

  plugins: ['promise', 'prettier'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        ...prettierConfig,
      },
    ],
  },
};
