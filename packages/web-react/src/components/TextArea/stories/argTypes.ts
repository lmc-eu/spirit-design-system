import { ValidationStates } from '../../../constants';

export default {
  validationState: {
    control: {
      type: 'select',
      options: [...Object.values(ValidationStates), undefined],
    },
    defaultValue: undefined,
  },
  isAutoResizing: {
    control: {
      type: 'boolean',
    },
    defaultValue: false,
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
      type: 'text',
    },
    defaultValue: '',
  },
  helperText: {
    control: {
      type: 'text',
    },
    defaultValue: '',
  },
};
