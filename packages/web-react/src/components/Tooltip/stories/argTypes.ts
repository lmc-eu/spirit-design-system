export default {
  placement: {
    control: {
      type: 'select',
      options: ['top', 'right', 'bottom', 'left', 'off'],
    },
    defaultValue: 'bottom',
  },
  isDismissible: {
    control: {
      type: 'boolean',
    },
    defaultValue: false,
  },
  label: {
    control: {
      type: 'text',
    },
    defaultValue: '',
  },
  closeLabel: {
    control: {
      type: 'text',
    },
    defaultValue: 'Close',
  },
};
