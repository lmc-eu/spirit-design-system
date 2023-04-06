import { TextColors } from '../../../constants';

export default {
  target: {
    control: {
      type: 'select',
      options: ['_blank', '_self', '_parent', '_top', undefined],
    },
    defaultValue: undefined,
  },
  color: {
    control: {
      type: 'select',
      options: [...Object.values(TextColors)],
    },
    defaultValue: TextColors.PRIMARY,
  },
  href: {
    control: {
      type: 'text',
    },
    defaultValue: 'https://www.example.com',
  },
  isDisabled: {
    control: {
      type: 'boolean',
    },
    defaultValue: false,
  },
  isUnderlined: {
    control: {
      type: 'boolean',
    },
    defaultValue: false,
  },
};
