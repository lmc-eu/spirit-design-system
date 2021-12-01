import React from 'react';
import Tag, { TagProps } from './Tag';

export default {
  title: 'Components/Tag',
  argTypes: {
    color: {
      options: ['default', 'informative', 'success', 'warning', 'danger'],
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
};

const Template = (args: TagProps) => <Tag {...args} />;

export const ExampleTag = Template.bind({});
ExampleTag.args = {
  color: 'default',
  theme: 'dark',
  children: 'Tag example',
};
