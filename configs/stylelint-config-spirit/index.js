const prettierPlugin = require('./plugins/prettier');
const styleRules = require('./rules/style');
const unstableRules = require('./rules/unstable');

module.exports = {
  extends: ['stylelint-config-standard-scss', prettierPlugin, styleRules, unstableRules],
  rules: {
    // No default value
    // Reason: Color-named values disabled - desired lint should check for design system token values only.
    // Docs: https://stylelint.io/user-guide/rules/list/color-named
    'color-named': 'never',

    // Reason: Except for utility classes and third-party overrides, !important can be avoided.
    // Docs: https://stylelint.io/user-guide/rules/list/declaration-no-important
    'declaration-no-important': true,

    // Reasons:
    // - Background images should be stored locally.
    // - Lets make people think more about what actually needs to be animated. Only hardware-accelerable properties should be transitioned.
    // Docs: https://stylelint.io/user-guide/rules/list/declaration-property-value-disallowed-list
    'declaration-property-value-disallowed-list': [
      {
        '/^background/': ['http:', 'https:'],
        '/^transition/': ['/all/'],
      },
      {
        message:
          'Transitioning all properties and absolute background URLs are not allowed (declaration-property-value-disallowed-list)',
      },
    ],

    // No default value
    // Reason: Declaring font weights in other ways is unsafe.
    // Docs: https://stylelint.io/user-guide/rules/list/font-weight-notation
    'font-weight-notation': 'numeric',

    // Reason: Selector maximum class count should be just one but especially form parts/components
    // need more complex selectors to add styles when validation is applied.
    // Setting rule to "1" would be uneasy to pass in almost all projects so "2" is clearly just fine.
    // In case of inevitable more complex selector it is allowed and recommended to locally disable that rule.
    // Docs: https://stylelint.io/user-guide/rules/list/selector-max-class
    'selector-max-class': 2,

    // Reason: Keep selector specificity as low as possible by default.
    // Docs: https://stylelint.io/user-guide/rules/list/selector-max-compound-selectors
    'selector-max-compound-selectors': 3,

    // Reason: IDs are handy for Javascript, not for CSS anymore.
    // Docs: https://stylelint.io/user-guide/rules/list/selector-max-id
    'selector-max-id': 0,

    // Reason: Keep selector specificity as low as possible by default.
    // Docs: https://stylelint.io/user-guide/rules/list/selector-max-specificity
    'selector-max-specificity': '0,4,0',

    // Reason: Most of the time, we should know what elements or classes we are targeting.
    // Docs: https://stylelint.io/user-guide/rules/list/selector-max-universal
    'selector-max-universal': 0,

    // Reason: Avoid compound selectors' creation using nested ampersand SASS syntax.
    // Main reasons why use this pattern:
    // - Unification with design system components code style
    // - Look up easily for the selector using fulltext search in IDEs
    // - Better orientation in longer component's code when scrolled down
    // - Makes `no-descending-specificity` stylelint rule work correctly
    // - IDE's support clicking through from selector usage to its source
    // Docs: https://stylelint.io/user-guide/rules/list/selector-nested-pattern/
    'selector-nested-pattern': [
      '(^&:)|(^&\\[)|(^&\\.(is\\-|has\\-))',
      {
        message:
          'Only pseudo class selector, attribute selector and combination with state class is allowed (selector-nested-pattern)',
      },
    ],

    // Reason: In most cases, it only needlessly increases selector specificity.
    // Docs: https://stylelint.io/user-guide/rules/list/selector-no-qualifying-type
    'selector-no-qualifying-type': true,

    // Default value: 'always' with secondary options.
    // Reason: Turned off to support grouping variables using empty lines.
    // Docs: https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/dollar-variable-empty-line-before/README.md
    'scss/dollar-variable-empty-line-before': null,

    // Default value: 'never'
    // Reasons:
    // - The aim is unified syntax;
    // - mixin is a callable function;
    // - will not be misunderstood with extended selector.
    // Docs: https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/at-mixin-argumentless-call-parentheses/README.md
    'scss/at-mixin-argumentless-call-parentheses': 'always',

    // Default value: true
    // Reason: Since there is `max-line-length` rule se to max. 120 chars, it should be allowed to use a new line for better code readability.
    // Docs: https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/operator-no-newline-after/README.md
    'scss/operator-no-newline-after': null,

    // Default value: true
    // Reason: Since there is `max-line-length` rule se to max. 120 chars, it should be allowed to use a new line for better code readability.
    // (same reason for rule above)
    // Docs: https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/operator-no-newline-before/README.md
    'scss/operator-no-newline-before': null,

    // Default value: 'always'
    // Reason: Support multi-line value definitions lets developer make code more readable.
    // It is handy especially for uneasy math calculations.
    // Docs: https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/dollar-variable-colon-space-after/README.md
    'scss/dollar-variable-colon-space-after': 'always-single-line',

    // Default value `comment-no-empty`: null
    // Default value `scss/comment-no-empty`: true
    // Reason: Allow empty lines in structured block comments.
    // Docs: https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/comment-no-empty/README.md
    'scss/comment-no-empty': null,

    // Default value: true
    // Reasons:
    // - In some cases it is handy to use functions like `unquote`;
    // - values come from Supernova, so you never know what you're going to get.
    // Docs: https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/function-unquote-no-unquoted-strings-inside/README.md
    'scss/function-unquote-no-unquoted-strings-inside': null,
  }
};
