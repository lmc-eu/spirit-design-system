module.exports = {
  extends: [
    '@lmc-eu/stylelint-config',
    'stylelint-config-prettier'
  ],
  rules: {
    // This rule can lead to less readable code
    // @see: https://github.com/stylelint/stylelint-config-recommended/issues/14
    'declaration-block-no-redundant-longhand-properties': null,
  }
}
