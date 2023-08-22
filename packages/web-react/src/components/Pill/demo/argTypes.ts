import { ActionColors, EmotionColors } from '../../../constants';

export default {
  color: {
    control: {
      type: 'select',
      options: [...Object.values(ActionColors), ...Object.values(EmotionColors), 'selected', 'unselected'],
    },
    defaultValue: 'selected',
  },
};
