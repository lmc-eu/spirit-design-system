import config from '@almacareer/remark-config';

export default {
  ...config,
  plugins: [
    ...config.plugins,
    // Values should increment by one from the first item
    // @see: https://github.com/remarkjs/remark-lint/tree/main/packages/remark-lint-ordered-list-marker-value
    ['remark-lint-ordered-list-marker-value', 'ordered'],

    // Do not check blank lines between list items
    // @see: https://github.com/remarkjs/remark-lint/tree/main/packages/remark-lint-list-item-spacing
    ['remark-lint-list-item-spacing', false],

    // @see: https://github.com/ilyatitovich/remark-lint-heading-capitalization
    [
      'remark-lint-heading-capitalization',
      {
        lowerCaseWords: ['eu/spirit', '@lmc', 'spirit/node', 'spirit/jsdom', 'v1', 'v2', 'v3'],
      },
    ],
  ],
};
