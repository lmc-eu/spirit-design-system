import { EmotionColors, Sizes } from '../../../constants';

export default {
  color: {
    control: {
      type: 'select',
      options: [...Object.values(EmotionColors), 'neutral'],
    },
    defaultValue: 'neutral',
  },
  size: {
    control: {
      type: 'select',
      options: [...Object.values(Sizes)],
    },
    defaultValue: Sizes.MEDIUM,
  },
  isSubtle: {
    control: {
      type: 'boolean',
    },
    defaultValue: false,
  },
};
