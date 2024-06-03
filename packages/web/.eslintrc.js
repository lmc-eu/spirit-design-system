module.exports = {
  extends: [
    '../../.eslintrc',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'plugin:prettier/recommended',
    '@lmc-eu/eslint-config-jest',
  ],

  parser: '@typescript-eslint/parser', // the TypeScript parser we installed earlier

  parserOptions: {
    ecmaVersion: 'latest',
    project: './config/tsconfig.eslint.json',
  },

  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.ts'],
      },
    },
  },

  plugins: ['promise', '@typescript-eslint', 'prettier'],
  rules: {
    // disable for `scripts` and `config`
    '@typescript-eslint/no-var-requires': 'off',
    // allow ++ in for loops
    'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
    // disabled due to typescript
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': ['error', { allow: ['resolve', 'reject', 'done', 'next', 'error'] }],
    // disabled due to typescript
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': 'warn',
    // We are using typescript, disable jsdoc rules
    'jsdoc/require-jsdoc': 'off',
    'jsdoc/require-returns': 'off',
    'jsdoc/require-param-type': 'off',
    // allow reassign in properties
    'no-param-reassign': ['warn', { props: false }],
    // support monorepos
    'import/no-extraneous-dependencies': ['error', { packageDir: ['./', '../../'] }],
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
