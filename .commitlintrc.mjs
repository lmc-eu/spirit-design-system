export default {
  extends: ['@lmc-eu/commitlint-config'],
  ignores: [
    (commit) => commit.includes('[ci-skip]'),
    (commit) => commit.includes('Pull request'),
    (commit) => commit.includes('Updated styles and tokens'),
  ],
  rules: {
    'scope-enum': [
      1,
      'always',
      [
        // Use when committing changes/additions/removals to exact package
        'analytics',
        'codemods',
        'common',
        'design-tokens',
        'form-validations',
        'icons',
        'web',
        'web-react',
        'web-twig',
        // Use when committing changes/additions/removals to exact exporter
        'exporter-js',
        'exporter-scss',
        'exporter-assets',
        'exporter-tokens',
        // Use when committing changes/additions/removals to exact config
        'jest-config',
        'prettier-config',
        'stylelint-config',
        'typescript-config',
        // Use when affecting the scripts
        'scripts',
        // Use when affecting CI process
        'ci',
        // Use for anything that does not directly affect packages, ie. updating repo-wide
        'repo',
        // Use for changes in support applications like `demo`
        'demo',
      ],
    ],
  },
};
