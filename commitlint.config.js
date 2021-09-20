module.exports = {
  extends: ['@lmc-eu/commitlint-config'],
  ignores: [
    (commit) => commit.includes('[ci-skip]'),
    (commit) => commit.includes('Pull request'),
    /**
     * Ignore Dependabot commits because they are violating sentence case rule
     * and cannot be configured or forced to respect commitlint configuration.
     *
     * @see https://github.com/dependabot/dependabot-core/issues/1666
     * @see https://github.com/dependabot/dependabot-core/issues/406
     */
    (commit) => commit.includes('Deps: bump'),
  ],
};
