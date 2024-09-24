import { Markdown } from '@storybook/blocks';
import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { ToastLinkProps } from '../../../types';
import ReadMe from '../README.md';
import { Toast, ToastBar, ToastBarMessage, ToastBarLink } from '..';

const meta: Meta<typeof ToastBarLink & { message: string }> = {
  title: 'Components/Toast',
  component: ToastBarLink,
  parameters: {
    docs: {
      page: () => <Markdown>{ReadMe}</Markdown>,
    },
  },
  argTypes: {
    children: {
      control: 'text',
    },
    href: {
      control: 'text',
    },
  },
  args: {
    children: 'This is a toast link',
    href: '#',
  },
};

export default meta;

type Story = StoryObj<typeof ToastBarLink>;

const ToastBarComponent = (args: ToastLinkProps) => {
  const { children, ...restProps } = args;

  return (
    <Toast alignmentY="top">
      <ToastBar id="test">
        <ToastBarMessage>This is a Toast message.</ToastBarMessage>
        <ToastBarLink {...restProps}>{children}</ToastBarLink>
      </ToastBar>
    </Toast>
  );
};

export const ToastBarPlaygroundLink: Story = {
  name: 'ToastBarLink',
  render: ToastBarComponent,
};
