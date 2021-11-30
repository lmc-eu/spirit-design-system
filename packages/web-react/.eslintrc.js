module.exports = {
  root: true,
  env: {
    es6: true,
    browser: true,
  },

  parser: '@typescript-eslint/parser', // the TypeScript parser we installed earlier

  ignorePatterns: ['node_modules', '!.*.js'],

  parserOptions: {
    project: './config/tsconfig.eslint.json',
    ecmaFeatures: { jsx: true }, // Allows for the parsing of JSX
    ecmaVersion: 'latest',
    sourceType: 'module',
  },

  settings: {
    'import/resolver': {
      node: {
        extensions: ['.ts', '.tsx'],
      },
    },
    react: {
      version: 'detect',
    },
  },

  extends: [
    '@lmc-eu/eslint-config-base',
    '@lmc-eu/eslint-config-base/optional',
    'prettier',
    'plugin:react/recommended', // eslint react rules (github.com/yannickcr/eslint-plugin-react)
    'plugin:jsx-a11y/recommended', // accessibility plugin
    // Prettier plugin and recommended rules
    'plugin:prettier/recommended',
  ],

  plugins: ['prettier', 'promise', 'react', '@typescript-eslint'],
  rules: {
    'react/jsx-filename-extension': [
      'error',
      { extensions: ['.js', '.jsx', '.ts', '.tsx'] },
    ],
    'react/prop-types': 'off', // We turn off prop-types rule, as we will use TypeScript's types instead.
    'react/react-in-jsx-scope': 'off',
    'react/prefer-stateless-function': 'off', // PureComponents ftw.
    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        components: ['Link'],
        specialLink: ['to', 'hrefLeft', 'hrefRight'],
        aspects: ['invalidHref', 'preferButton'],
      },
    ],
    'react/jsx-props-no-spreading': 'off', // Used inside HOC, that is fine.
    '@typescript-eslint/no-use-before-define': 'warn',
    'import/extensions': 'off',
    'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
  },
};
