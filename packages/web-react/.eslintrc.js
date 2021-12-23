module.exports = {
  extends: [
    '../../.eslintrc',
    '@lmc-eu/eslint-config-react',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'plugin:prettier/recommended',
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
    'no-use-before-define': 'off',
    'react/jsx-filename-extension': ['error', { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
    'react/jsx-props-no-spreading': 'off', // Used inside HOC, that is fine.
    'react/function-component-definition': 'off',
    'react/display-name': 'off',
    'react/button-has-type': 'off',
    '@typescript-eslint/no-use-before-define': 'warn',
    '@typescript-eslint/no-var-requires': 'off',
    'import/extensions': 'off',
    'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
  },
};
