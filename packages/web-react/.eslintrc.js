module.exports = {
  extends: [
    'eslint-config-spirit',
    '@lmc-eu/eslint-config-react',
    '@lmc-eu/eslint-config-typescript',
    '@lmc-eu/eslint-config-typescript/react',
    'prettier',
  ],

  parserOptions: {
    ecmaVersion: 'latest',
    project: './config/tsconfig.eslint.json',
  },

  rules: {
    // We are using default values
    // @see { @link https://react.dev/learn/passing-props-to-a-component#specifying-a-default-value-for-a-prop React default values }
    // @see { @link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/require-default-props.md }
    'react/require-default-props': 'off',

    // @see: https://github.com/ArnaudBarre/eslint-plugin-react-refresh
    'react-refresh/only-export-components': 'warn',

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

    /* start: allow UNSTABLE_ and UNSAFE_ prefix in component and prop names */
    // @see: https://github.com/lmc-eu/spirit-design-system/blob/main/docs/decisions/006-experimental-code.md

    // enforce PascalCase for user-defined JSX components
    // @see: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-pascal-case.md
    'react/jsx-pascal-case': [
      'error',
      {
        allowAllCaps: true,
        ignore: ['UNSTABLE_*'],
      },
    ],

    // enforce camelcase naming conventions
    // @see: https://eslint.org/docs/latest/rules/camelcase
    camelcase: [
      'error',
      {
        properties: 'never',
        ignoreDestructuring: false,
        allow: ['^UNSAFE_', '^UNSTABLE_'],
      },
    ],
    /* end: allow UNSTABLE_ and UNSAFE_ prefix in component and prop names */

    // support monorepos
    'import/no-extraneous-dependencies': [
      'error',
      {
        packageDir: ['./', '../../'],
        peerDependencies: true,
      },
    ],

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
  },

  overrides: [
    {
      // Stories are build by `apps/storybook` and have dependencies elsewhere
      files: ['**/stories/**'],
      rules: {
        'import/no-extraneous-dependencies': 'off',
        'jsx-a11y/anchor-is-valid': 'off',
      },
    },
    {
      // In demo files we want to use console and alert
      files: ['**/demo/**'],
      rules: {
        'jsx-a11y/anchor-is-valid': 'off',
        'no-console': 'off',
        'no-alert': 'off',
      },
    },
    {
      files: ['scripts/**', 'config/**'],
      rules: {
        '@typescript-eslint/no-var-requires': 'off',
      },
    },
  ],
};
