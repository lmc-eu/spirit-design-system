module.exports = {
  extends: ['@lmc-eu/commitlint-config'],
  ignores: [
    (commit) => commit.includes('[ci-skip]'),
    (commit) => commit.includes('Pull request'),
  ],
  rules: {
    'scope-enum': [
      1,
      'always',
      [
        // Use when committing changes/additions/removals to exact package
        'design-tokens',
        'web',
        'web-react',
        // Use when affecting CI process
        'ci',
        // Use for anything that does not directly affect packages, ie. updating repo-wide
        'repo',
      ],
    ],
  },
};
