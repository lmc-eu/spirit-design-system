import { EmotionColors } from '../../../constants';

export default {
  color: {
    control: {
      type: 'select',
      options: [...Object.values(EmotionColors)],
    },
    defaultValue: EmotionColors.SUCCESS,
  },
  isCentered: {
    control: {
      type: 'boolean',
    },
    defaultValue: false,
  },
  iconName: {
    control: {
      type: 'text',
    },
    defaultValue: 'check-plain',
  },
};
