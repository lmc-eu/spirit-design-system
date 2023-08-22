export default {
  fullWidthMode: {
    control: {
      type: 'boolean',
    },
    defaultValue: false,
  },
  enableAutoClose: {
    control: {
      type: 'boolean',
    },
    defaultValue: false,
  },
  placement: {
    control: {
      type: 'select',
      options: ['bottom-left', 'bottom-right', 'top-left', 'top-right'],
    },
    defaultValue: 'bottom-left',
  },
};
