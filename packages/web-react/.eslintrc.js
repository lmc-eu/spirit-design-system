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

  parserOptions: {
    ecmaVersion: 'latest',
    project: './config/tsconfig.eslint.json',
  },

  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
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
  },
};
