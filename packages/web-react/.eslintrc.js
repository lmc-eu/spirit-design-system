module.exports = {
  extends: [
    '../../.eslintrc',
    '@lmc-eu/eslint-config-react',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'plugin:prettier/recommended',
    '@lmc-eu/eslint-config-jest',
  ],

  parser: '@typescript-eslint/parser', // the TypeScript parser we installed earlier

  // because of ./config/jest/setupTestingLibrary.js
  // 6:1  error  'beforeAll' is not defined  no-undef
  // 15:1  error  'afterAll' is not defined   no-undef
  env: {
    jest: true,
  },

  parserOptions: {
    ecmaVersion: 'latest',
    project: './config/tsconfig.eslint.json',
  },

  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.md'],
      },
    },
  },

  plugins: ['promise', 'react', '@typescript-eslint', 'prettier'],
  rules: {
    // @TODO: add to typescript config
    'react/jsx-filename-extension': ['error', { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
    // we like to use props spreading for additional props in this case
    'react/jsx-props-no-spreading': 'off', // Used inside HOC, that is fine.
    // prefer arrow function over function expression
    'react/function-component-definition': [
      'warn',
      { namedComponents: 'arrow-function', unnamedComponents: 'arrow-function' },
    ],
    // problem of export default {} in stories
    'react/display-name': 'off',
    // disable for `scripts` and `config`
    '@typescript-eslint/no-var-requires': 'off',
    // interface which extends some other interface is not considered as meaningful interface
    '@typescript-eslint/no-empty-interface': 'off',
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
    'import/no-extraneous-dependencies': [
      'error',
      {
        packageDir: ['./', '../../'],
        peerDependencies: true,
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
    // disable double quotes
    quotes: ['warn', 'single'],
    // use useIsomorphicLayoutEffect instead of useLayoutEffect
    // @see: https://medium.com/@alexandereardon/uselayouteffect-and-ssr-192986cdcf7a
    'no-restricted-imports': [
      'error',
      // Disabling using of useLayoutEffect from react
      {
        name: 'react',
        importNames: ['useLayoutEffect'],
        message: '`useLayoutEffect` causes a warning in SSR. Use `useIsomorphicLayoutEffect`',
      },
    ],
  },
  overrides: [
    {
      files: ['**/stories/**'],
      rules: {
        'import/no-extraneous-dependencies': 'off',
      },
    },
  ],
};
