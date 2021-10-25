import React from 'react';
import Tag, { TagProps } from './Tag';

export default {
  title: 'Components/Tag',
  argTypes: {
    color: {
      options: ['default', 'information', 'success', 'warning', 'danger'],
    },
    theme: {
      options: ['light', 'dark'],
      defaultValue: 'dark',
    },
    children: {
      control: 'text',
    },
  },
};

const Template = (args: TagProps) => <Tag {...args} />;

export const Default = Template.bind({});
Default.args = {
  color: 'default',
  children: 'Tag default',
};

export const Information = Template.bind({});
Information.args = {
  color: 'information',
  children: 'Tag information',
};

export const Success = Template.bind({});
Success.args = {
  color: 'success',
  children: 'Tag success',
};

export const Warning = Template.bind({});
Warning.args = {
  color: 'warning',
  children: 'Tag warning',
};

export const Danger = Template.bind({});
Danger.args = {
  color: 'danger',
  children: 'Tag danger',
};
