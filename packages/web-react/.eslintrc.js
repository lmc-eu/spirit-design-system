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
    'no-use-before-define': ['error', 'nofunc'],
    'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: [
          // @TODO: should we list all `*.config.js` files here?
          // or all files in `config/**` directory?
          'config/**',
          'test/**', // tape, common npm pattern
          'tests/**', // also common npm pattern
          'spec/**', // mocha, rspec-like pattern
          'scripts/*', // custom npm scripts
          '**/__tests__/**', // jest pattern
          '**/__mocks__/**', // jest pattern
          'test.{js,jsx}', // repos with a single test file
          'test-*.{js,jsx}', // repos with multiple top-level test files
          '**/*{.,_}{test,spec}.{js,jsx}', // tests where the extension or filename suffix denotes that it is a test
          '**/jest.config.js', // jest config
          '**/jest.setup.js', // jest setup
          '**/vue.config.js', // vue-cli config
          '**/webpack.config.js', // webpack config
          '**/webpack.config.*.js', // webpack config
          '**/rollup.config.js', // rollup config
          '**/rollup.config.*.js', // rollup config
          '**/gulpfile.js', // gulp config
          '**/gulpfile.*.js', // gulp config
          '**/Gruntfile{,.js}', // grunt config
          '**/protractor.conf.js', // protractor config
          '**/protractor.conf.*.js', // protractor config
          '**/karma.conf.js', // karma config
          '**/.eslintrc.js', // eslint config
          '**/postcss.config.js', // postcss config
        ],
        optionalDependencies: false,
      },
    ],
  },
};
