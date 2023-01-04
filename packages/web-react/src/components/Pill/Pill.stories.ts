import { ComponentMeta } from '@storybook/react';
import Pill from './Pill';

export default {
  title: 'Components/Pill',
  component: Pill,
  parameters: {
    docs: {
      description: {
        component: 'Can be used to show count or label.',
      },
    },
  },
} as ComponentMeta<typeof Pill>;

export { default as Pill } from './stories/Pill';
export { default as PillColors } from './stories/PillColors';
export { default as HTML } from './stories/PillHtml';
export { default as Props } from './stories/PillProps';
