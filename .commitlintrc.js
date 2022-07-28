module.exports = {
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
        'design-tokens',
        'icons',
        'web',
        'web-react',
        'web-twig',
        // Use when affecting CI process
        'ci',
        // Use for anything that does not directly affect packages, ie. updating repo-wide
        'repo',
      ],
    ],
  },
};
