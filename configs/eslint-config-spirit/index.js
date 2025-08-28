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

  extends: [
    '@lmc-eu/eslint-config-react/base',
    '@lmc-eu/eslint-config-react/optional',
    '@lmc-eu/eslint-config-jest',
    'plugin:storybook/recommended',
    './style.js',
  ],

  plugins: ['promise', 'react', '@typescript-eslint', 'react-refresh'],

  rules: {
    /**
     * Set sorting of imports
     *
     * @see { @link https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/order.md }
     */
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

    /**
     * Allow reassignment of params in properties
     *
     * @see { @link https://eslint.org/docs/latest/rules/no-param-reassign }
     */
    'no-param-reassign': ['warn', { props: false }],

    /**
     * Allow `++`/`--` in for loops
     *
     * @see { @link https://eslint.org/docs/rules/no-plusplus }
     */
    'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],

    /**
     * Warn when not using single quotes
     *
     * @see { @link https://eslint.org/docs/latest/rules/quotes }
     */
    quotes: ['warn', 'single'],

    /**
     * Disable arrow body style
     * There are places where arrow body make sense and where does not
     *
     * @todo create a guideline for this
     *
     * @see { @link https://eslint.org/docs/latest/rules/arrow-body-style }
     */
    'arrow-body-style': 'off',
  },
};
