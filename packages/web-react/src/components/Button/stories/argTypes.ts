import { ActionColors, EmotionColors, Sizes } from '../../../constants';

export default {
  color: {
    control: {
      type: 'select',
      options: [...Object.values(ActionColors), ...Object.values(EmotionColors)],
    },
    defaultValue: ActionColors.PRIMARY,
  },
  isDisabled: {
    control: {
      type: 'boolean',
    },
    defaultValue: false,
  },
  isBlock: {
    control: {
      type: 'boolean',
    },
    defaultValue: false,
  },
  isSquare: {
    control: {
      type: 'boolean',
    },
    defaultValue: false,
  },
  type: {
    control: {
      type: 'select',
      options: ['button', 'submit', 'reset'],
    },
    defaultValue: 'button',
  },
  size: {
    control: {
      type: 'select',
      options: [...Object.values(Sizes)],
    },
    defaultValue: Sizes.MEDIUM,
  },
};
