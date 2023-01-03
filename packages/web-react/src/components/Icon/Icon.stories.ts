import { ComponentMeta } from '@storybook/react';
import Icon from './Icon';

export default {
  title: 'Components/Icon',
  component: Icon,
  parameters: {
    docs: {
      description: {
        component: `Icon`,
      },
    },
  },
} as ComponentMeta<typeof Icon>;

export { default as Icon } from './stories/Icon';
export { default as HTML } from './stories/IconHtml';
export { default as Props } from './stories/IconProps';
