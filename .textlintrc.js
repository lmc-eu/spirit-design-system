module.exports = {
  rules: {
    '@lmc-eu/textlint-rule-preset-lmc': {
      'title-case': {
        headingLevels: [6],
        exclude: [
          '@lmc-eu',
          '@lmc-eu/spirit-icons',
          'jest-config-spirit',
          'prettier-config-spirit',
        ],
      },
      'stop-words': {
        severity: 'warning',
      },
    },
  },
};