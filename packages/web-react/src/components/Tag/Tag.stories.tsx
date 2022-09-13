import { ComponentMeta } from '@storybook/react';
import React from 'react';
import Tag from './Tag';

export default {
  title: 'Components/Tag',
  argTypes: {
    color: {
      options: ['default', 'informative', 'success', 'warning', 'danger'],
      control: { type: 'select' },
    },
    size: {
      options: ['xsmall', 'small', 'medium'],
      control: { type: 'select' },
    },
    theme: {
      options: ['light', 'dark'],
      control: { type: 'select' },
    },
    children: {
      control: 'text',
    },
  },
} as ComponentMeta<typeof Tag>;

const Template = (args: typeof Tag) => <Tag {...args} />;

export const ExampleTag = Template.bind({});
ExampleTag.args = {
  color: 'default',
  size: 'medium',
  theme: 'dark',
  children: 'Tag example',
  UNSAFE_style: { opacity: 1 },
  UNSAFE_className: 'my-unsupported-class',
};
