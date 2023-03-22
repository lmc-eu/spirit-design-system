import { EmotionColors, Sizes } from '../../../constants';

export default {
  color: {
    control: {
      type: 'select',
      options: [...Object.values(EmotionColors), 'default', 'neutral'],
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
  theme: {
    control: {
      type: 'select',
      options: ['dark', 'light', undefined],
    },
    defaultValue: undefined,
  },
  isSubtle: {
    control: {
      type: 'boolean',
    },
    defaultValue: false,
  },
};
