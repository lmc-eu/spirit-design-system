import React from 'react';
import Text from './Text';
import { SpiritTextProps } from '../../types';

export default {
  title: 'Typography/Text',
  argTypes: {
    children: 'Some long text',
    type: {
      control: {
        type: 'select',
        options: ['heading', 'body'],
      },
    },
    size: {
      control: {
        type: 'select',
        options: ['xlarge', 'large', 'medium', 'small', 'xsmall'],
      },
    },
    variant: {
      control: {
        type: 'select',
        options: ['text', 'link', 'button'],
      },
    },
    emphasis: {
      control: {
        type: 'select',
        options: ['regular', 'bold', 'italic'],
      },
    },
  },
};

const Template = (args: SpiritTextProps) => <Text {...args} />;

export const DefaultText = Template.bind({});
DefaultText.args = {
  children: 'Some long text',
  type: 'heading',
  size: 'xlarge',
  variant: 'text',
};
