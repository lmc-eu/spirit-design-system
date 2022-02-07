import React from 'react';
import Container, { ContainerProps } from './Container';

export default {
  title: 'Components/Container',
  argTypes: {
    children: {
      control: 'text',
    },
  },
};

const Template = (args: ContainerProps) => <Container {...args} />;

export const LayoutContainer = Template.bind({});
LayoutContainer.args = {
  children: 'Container',
};
