import React from 'react';
import Button from './Button';

export default {
  title: 'Components/Button',
  argTypes: {
    type: 'primary',
    label: { control: 'text' },
    onClick: { action: 'onClick' },
  },
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  type: 'primary',
  label: 'Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  type: 'secondary',
  label: 'Button',
};

export const Tertiary = Template.bind({});
Tertiary.args = {
  type: 'tertiary',
  label: 'Button',
};
