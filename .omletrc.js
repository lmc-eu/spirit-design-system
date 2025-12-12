module.exports = {
  include: [
    'packages/web-react/src/**/*.{jsx,tsx,js,ts}'
  ],
  ignore: [
    '**/demo/**/*',
    '**/build/**/*',
  ],
  workspaces: {
    '@alma-oss/spirit-web-react': {
      exports: {
        '.': 'src/index.ts',
        './components': 'src/components/index.ts',
        './components/*': 'src/components/*',
      },
      tsconfigPath: 'tsconfig.json',
    }
  }
}
