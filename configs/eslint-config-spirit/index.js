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
    // '@lmc-eu/eslint-config-typescript',
    // '@lmc-eu/eslint-config-typescript/react',
    '@lmc-eu/eslint-config-jest',
    'prettier',
    'plugin:prettier/recommended',
    'plugin:storybook/recommended',
  ],

  plugins: ['promise', 'react', 'prettier'],

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

    'no-param-reassign': ['warn', { props: true }],

    /* start: allow UNSTABLE_ and UNSAFE_ prefix in component and prop names */
    // @see: https://github.com/lmc-eu/spirit-design-system/blob/main/docs/decisions/006-experimental-code.md

    // enforce camelcase naming conventions
    // @see: https://eslint.org/docs/latest/rules/camelcase
    // camelcase: [
    //   'error',
    //   {
    //     properties: 'never',
    //     ignoreDestructuring: false,
    //     allow: ['^UNSAFE_', '^UNSTABLE_'],
    //   },
    // ],

    // enforce PascalCase for user-defined JSX components
    // @see: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-pascal-case.md
    // 'react/jsx-pascal-case': [
    //   'error',
    //   {
    //     allowAllCaps: true,
    //     ignore: ['UNSTABLE_*'],
    //   },
    // ],
    /* end: allow UNSTABLE_ and UNSAFE_ prefix in component and prop names */

    /* start: turn off unresolved imports */
    // @see: https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-unresolved.md#importno-unresolved
    // Turn off unresolved imports because Typescript is already handling this
    // 'import/no-unresolved': 'off',

    // 'import/extensions': [
    //   'error',
    //   'ignorePackages',
    //   {
    //     js: 'never',
    //     jsx: 'never',
    //     ts: 'never',
    //     tsx: 'never',
    //   },
    // ],
  },

  // settings: {
  //   'import/resolver': {
  //     typescript: {},
  //     node: {
  //       extensions: ['.js', '.jsx', '.ts', '.tsx'],
  //     },
  //   },

  //   /* end: turn off unresolved imports */

  //   // start: turn off JSDoc params requirement for TypeScript
  //   // @see: https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/require-param.md
  //   'jsdoc/require-param': 'off',
  //   // end: turn of JSDoc params for TypeScript
  // },
};
