import { ActionColors, EmotionColors, Sizes } from '../../../constants';

export default {
  color: {
    control: {
      type: 'select',
      options: [...Object.values(ActionColors), ...Object.values(EmotionColors)],
    },
    defaultValue: ActionColors.PRIMARY,
  },
  isBlock: {
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
  isLoading: {
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
  size: {
    control: {
      type: 'select',
      options: [...Object.values(Sizes)],
    },
    defaultValue: Sizes.MEDIUM,
  },
};
