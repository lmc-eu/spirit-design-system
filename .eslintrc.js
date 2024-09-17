let prettierConfig;

(async () => {
	prettierConfig = (await import('prettier-config-spirit')).prettierConfig;
})();

module.exports = {
  root: true,

  parserOptions: {
    ecmaVersion: 'latest',
  },

  env: {
    browser: true,
    node: true,
  },

  ignorePatterns: [
    'node_modules',
    '!.*.js',
    'packages/analytics',
    'packages/common',
    'packages/web-react',
    'packages/web',
    'packages/form-validations',
    'packages/codemods',
    'exporters/scss',
    'exporters/js',
    'exporters/variables-scss',
    'examples/*'
  ],

  extends: ['@lmc-eu/eslint-config-react/base', '@lmc-eu/eslint-config-react/optional', 'prettier', 'plugin:prettier/recommended', 'plugin:storybook/recommended'],

  plugins: ['prettier'],

  rules: {
    'prettier/prettier': [
      'error',
      {
        ...prettierConfig,
      },
    ],
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
        pathGroups: [
          {
            pattern: '**',
            group: 'internal',
          },
          {
            pattern: '..',
            group: 'parent',
            position: 'after',
          },
        ],
        pathGroupsExcludedImportTypes: ['builtin'],
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
        'newlines-between': 'never',
      },
    ],
  },
};
