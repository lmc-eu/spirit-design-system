const OFF = null;

export default {
  rules: {
    // This rule can lead to less readable code
    // @see: https://github.com/stylelint/stylelint-config-recommended/issues/14
    'declaration-block-no-redundant-longhand-properties': OFF,
    // We couldn't resolve the issue with Next.js correctly interpreting the browserslist configuration,
    // which led to a misleading build-time warning when using "start" for "justify-content".
    // As a workaround, we enforce this rule and recommend using "flex-start" instead.
    'declaration-property-value-disallowed-list': [
      {
        'justify-content': ['start'],
      },
      {
        message: 'Using "start" may trigger a warning during Next.js build. Use "flex-start" instead.',
      },
    ],
  },
};
