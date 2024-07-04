const OFF = null;

export default {
  rules: {
    // This rule can lead to less readable code
    // @see: https://github.com/stylelint/stylelint-config-recommended/issues/14
    'declaration-block-no-redundant-longhand-properties': OFF,
  },
  overrides: [
    {
      files: ['*.test.scss'],
      rules: {
        'at-rule-empty-line-before': OFF,
      },
    },
  ],
};
