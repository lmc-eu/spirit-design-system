import { ValidationStates } from '../../../constants';

export default {
  validationState: {
    control: {
      type: 'select',
      options: [...Object.values(ValidationStates), undefined],
    },
    defaultValue: undefined,
  },
  type: {
    control: {
      type: 'select',
      options: ['email', 'number', 'password', 'search', 'tel', 'text', 'url'],
    },
    defaultValue: 'text',
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
  isLabelHidden: {
    control: {
      type: 'boolean',
    },
    defaultValue: false,
  },
  isFluid: {
    control: {
      type: 'boolean',
    },
    defaultValue: false,
  },
  hasPasswordToggle: {
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
  validationText: {
    control: {
      type: 'object',
    },
    defaultValue: '',
    description:
      'The validation text. Only visible if validationState is set. Use a string `"foo"` for single validation text or an array for multiple validation texts `["foo", "bar"]`.',
  },
  helperText: {
    control: {
      type: 'text',
    },
    defaultValue: '',
  },
};
