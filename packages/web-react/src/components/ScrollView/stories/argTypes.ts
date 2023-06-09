export default {
  direction: {
    control: {
      type: 'select',
      options: ['horizontal', 'vertical'],
    },
    defaultValue: 'vertical',
  },
  isScrollbarDisabled: {
    control: {
      type: 'boolean',
    },
    defaultValue: false,
  },
  overflowDecorators: {
    control: {
      type: 'select',
      options: ['borders', 'shadows', 'both'],
    },
    defaultValue: 'shadows',
  },
};
