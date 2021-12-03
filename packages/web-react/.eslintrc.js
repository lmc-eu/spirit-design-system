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
    '../../.eslintrc.js',
    'plugin:react/recommended', // eslint react rules (github.com/yannickcr/eslint-plugin-react)
    'plugin:jsx-a11y/recommended', // accessibility plugin
    'plugin:prettier/recommended', // prettier plugin and recommended rules
  ],

  plugins: ['promise', 'react', '@typescript-eslint'],
  rules: {
    'react/jsx-filename-extension': ['error', { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
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
