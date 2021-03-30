module.exports = {
  extends: ['@lmc-eu/commitlint-config'],
  ignores: [
    (commit) => commit.includes('[CI-SKIP]'),
    (commit) => commit.includes('Pull request'),
  ],
};
