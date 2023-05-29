export default {
  direction: {
    control: {
      type: 'select',
      options: ['horizontal', 'vertical'],
    },
    defaultValue: 'vertical',
  },
  edgeIndicators: {
    control: {
      type: 'select',
      options: ['borders', 'shadows', 'both'],
    },
    defaultValue: 'shadows',
  },
  isScrollbarDisabled: {
    control: {
      type: 'boolean',
    },
    defaultValue: false,
  },
};
