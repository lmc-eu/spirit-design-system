import { ValidationStates } from '../../../constants';

export default {
  validationState: {
    control: {
      type: 'select',
      options: [...Object.values(ValidationStates), undefined],
    },
    defaultValue: undefined,
  },
  isDisabled: {
    control: {
      type: 'boolean',
    },
    defaultValue: false,
  },
  isRequired: {
    control: {
      type: 'boolean',
    },
    defaultValue: false,
  },
  isChecked: {
    control: {
      type: 'boolean',
    },
    defaultValue: true,
  },
  isLabelHidden: {
    control: {
      type: 'boolean',
    },
    defaultValue: false,
  },
  isItem: {
    control: {
      type: 'boolean',
    },
    defaultValue: false,
  },
  indeterminate: {
    control: {
      type: 'boolean',
    },
    defaultValue: false,
  },
  label: {
    control: {
      type: 'text',
    },
    defaultValue: 'Field label',
  },
  name: {
    control: {
      type: 'text',
    },
    defaultValue: 'example',
  },
  for: {
    control: {
      type: 'text',
    },
    defaultValue: '',
  },
  message: {
    control: {
      type: 'object',
    },
    defaultValue: '',
    description:
      'The validation message. Use a string `"foo"` for single message or an array for multiple messages `["foo", "bar"]`.',
  },
  helperText: {
    control: {
      type: 'text',
    },
    defaultValue: '',
  },
};
