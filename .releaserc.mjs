/**
 * @type {import('semantic-release').GlobalConfig}
 */
export default {
  branches: [
    '+([0-9])?(.{+([0-9]),x}).x',
    'master',
    'main',
    'next',
    'next-major',
    { name: 'beta', prerelease: true },
    { name: 'alpha', prerelease: true },
  ],

  plugins: [
    '@semantic-release/commit-analyzer',
    ['semantic-release-lerna', { generateNotes: true, prepare: false, publish: false }],
    '@semantic-release/changelog',
    [
      '@semantic-release/git',
      {
        assets: ['CHANGELOG.md', 'lerna.json', 'package.json', 'packages/*/package.json'],
      },
    ],
  ],

  debug: true,
  ci: true,
};
