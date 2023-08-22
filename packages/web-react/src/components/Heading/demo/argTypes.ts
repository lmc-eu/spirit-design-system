import { SizesExtended } from '../../../constants';

export default {
  size: {
    control: {
      type: 'select',
      options: [...Object.values(SizesExtended)],
    },
    defaultValue: SizesExtended.MEDIUM,
  },
};
