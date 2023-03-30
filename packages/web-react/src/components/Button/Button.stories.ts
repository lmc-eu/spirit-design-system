import { ComponentMeta } from '@storybook/react';
import argTypes from './stories/argTypes';
import Button from './Button';

export default {
  title: 'Components/Button',
  component: Button,
  parameters: {
    docs: {
      description: {
        component: 'Buttons allow users to take actions.',
      },
    },
  },
  argTypes: {
    ...argTypes,
    type: {
      control: {
        type: 'select',
        options: ['button', 'submit', 'reset'],
      },
      defaultValue: 'button',
    },
  },
} as ComponentMeta<typeof Button>;

export { default as Button } from './stories/Button';
export { default as ButtonColors } from './stories/ButtonColors';
export { default as ButtonDisabled } from './stories/ButtonDisabled';
export { default as ButtonLoading } from './stories/ButtonLoading';
export { default as ButtonSquare } from './stories/ButtonSquare';
export { default as ButtonBlock } from './stories/ButtonBlock';
export { default as ButtonSize } from './stories/ButtonSize';
export { default as HTML } from './stories/ButtonHtml';
export { default as Props } from './stories/ButtonProps';
