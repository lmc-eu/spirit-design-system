import js from '@eslint/js';
import { defineConfig, globalIgnores } from 'eslint/config';
import { FlatCompat } from '@eslint/eslintrc';

const compat = new FlatCompat({
  baseDirectory: import.meta.dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

export default defineConfig([
  {
    extends: compat.extends('eslint-config-spirit'),
  },
  // # .eslintignore
  globalIgnores([
    // # NOTE:
    // # The following directives are only relevant when linting the whole
    // # project directory, ie. running `eslint .` ⚠️
    // # If you compile JavaScript into some output folder, exclude it here

    // Generated files or folders
    'node_modules',
    'dist',
    'build',
    // Ignore the playwright-report directory
    'playwright-report',
    // Ignore vendor directory in `packages/web-twig`
    'vendor',

    // Internal output folders
    'packages/**/types/*',
    'packages/**/esm/*',
    'packages/**/cjs/*',
    'packages/**/umd/*',
    'static',

    // Skip packages that don’t need linting from root
    'examples/*',
    'exporters/js',
    'exporters/scss',
    'exporters/tokens',
    'packages/analytics',
    'packages/codemods',
    'packages/common',
    'packages/design-tokens',
    'packages/form-validations',
    'packages/web',
    'packages/web-react',
    'scripts',

    // # Highly recommended to re-include JavaScript dotfiles to lint them
    // # (This will cause .eslintrc.js to be linted by ESLint 🤘)
    '!.*.js',

    // # Some tools use this pattern for their configuration files. Lint them!
    '!*.config.js',
  ]),
]);
