const OFF = null;

module.exports = {
  rules: {
    // This rule can lead to less readable code
    // @see: https://github.com/stylelint/stylelint-config-recommended/issues/14
    'declaration-block-no-redundant-longhand-properties': OFF,
  },
};
