module.exports = {
  extends: ['@lmc-eu/commitlint-config'],
  ignores: [
    (commit) => commit.includes('[ci-skip]'),
    (commit) => commit.includes('Pull request'),
  ],
};
