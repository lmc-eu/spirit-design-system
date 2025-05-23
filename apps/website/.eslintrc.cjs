module.exports = {
  extends: [
    '../../.eslintrc',
    '@lmc-eu/eslint-config-react',
    '@lmc-eu/eslint-config-typescript',
    '@lmc-eu/eslint-config-typescript/react',
    'prettier',
    'plugin:prettier/recommended',
    '@lmc-eu/eslint-config-jest',
    'plugin:@next/next/recommended',
  ],
  env: {
    jest: true,
  },
  plugins: ['promise', 'react', '@typescript-eslint', 'prettier', 'react-refresh'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    project: './tsconfig.eslint.json',
  },
  rules: {
    // @see: https://github.com/ArnaudBarre/eslint-plugin-react-refresh
    'react-refresh/only-export-components': 'warn',
    // @TODO: add to typescript config
    'react/jsx-filename-extension': ['error', { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
    // we like to use props spreading for additional props in this case
    'react/jsx-props-no-spreading': 'off', // Used inside HOC, that is fine.
    // prefer arrow function over function expression
    'react/function-component-definition': [
      'warn',
      { namedComponents: 'arrow-function', unnamedComponents: 'arrow-function' },
    ],
    // we have missing displayName attribute in our components
    // it is good for debugging
    // @see: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/display-name.md
    'react/display-name': 'off',
    // ignore UNSTABLE_ prefix in component names
    'react/jsx-pascal-case': [
      'error',
      {
        allowAllCaps: true,
        ignore: ['UNSTABLE_*'],
      },
    ],
    // ignore UNSAFE and UNSTABLE_ prefixes
    camelcase: [
      'error',
      {
        properties: 'never',
        ignoreDestructuring: false,
        allow: ['^UNSAFE_', '^UNSTABLE_'],
      },
    ],
    // allow ++ in for loops
    'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
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
    // allow empty interfaces with single extends (e.g. interface Foo extends SpiritBar {})
    // interface which extends some other interface is not considered as meaningful interface
    // we need this for meeting our component API conventions
    // @see: https://typescript-eslint.io/rules/no-empty-interface/
    '@typescript-eslint/no-empty-interface': ['error', { allowSingleExtends: true }],
    'react/react-in-jsx-scope': 'off',
  },
};
