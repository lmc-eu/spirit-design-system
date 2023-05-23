import { ValidationStates } from '../../../constants';

export default {
  validationState: {
    control: {
      type: 'select',
      options: [...Object.values(ValidationStates), undefined],
    },
    defaultValue: undefined,
  },
  iconName: {
    control: {
      type: 'text',
    },
  },
  isDisabled: {
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
  queueLimitBehavior: {
    control: {
      type: 'select',
      options: ['hide', 'disable', 'none'],
    },
    defaultValue: 'none',
  },
  isRequired: {
    control: {
      type: 'boolean',
    },
    defaultValue: false,
  },
  inputLabel: {
    control: {
      type: 'text',
    },
    defaultValue: 'Label',
  },
  linkText: {
    control: {
      type: 'text',
    },
    defaultValue: 'Upload your file',
  },
  labelText: {
    control: {
      type: 'text',
    },
    defaultValue: 'or drag and drop here',
  },
  helperText: {
    control: {
      type: 'text',
    },
    defaultValue: 'Max file size is 10 MB',
  },
  maxFileSize: {
    control: {
      type: 'number',
    },
    defaultValue: 10000000,
  },
  maxUploadedFiles: {
    control: {
      type: 'number',
    },
    defaultValue: 10,
  },
};
