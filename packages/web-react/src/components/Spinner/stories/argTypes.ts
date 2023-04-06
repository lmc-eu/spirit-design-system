import { TextColors } from '../../../constants';

export default {
  color: {
    control: {
      type: 'select',
      options: [...Object.values(TextColors), undefined],
    },
    defaultValue: undefined,
  },
};
