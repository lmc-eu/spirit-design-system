import { Markdown } from '@storybook/blocks';
import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { SpiritToastBarProps } from '../../../types';
import ReadMe from '../README.md';
import ToastBarLink from '../ToastBarLink';
import ToastBarMessage from '../ToastBarMessage';
import { Toast, ToastBar } from '..';

const meta: Meta<typeof ToastBar> = {
  title: 'Components/Toast',
  component: ToastBar,
  parameters: {
    docs: {
      page: () => <Markdown>{ReadMe}</Markdown>,
    },
  },
  argTypes: {
    children: {
      control: 'text',
    },
    closeLabel: {
      control: 'text',
      table: {
        defaultValue: { summary: 'Close' },
      },
    },
    color: {
      control: 'select',
      options: ['inverted', 'informative', 'success', 'warning', 'danger'],
      table: {
        defaultValue: { summary: 'inverted' },
      },
    },
    hasIcon: {
      control: 'boolean',
      table: {
        defaultValue: { summary: 'false' },
      },
    },
    iconName: {
      control: 'text',
    },
    isDismissible: {
      control: 'boolean',
      table: {
        defaultValue: { summary: 'false' },
      },
    },
    isOpen: {
      control: 'boolean',
      table: {
        defaultValue: { summary: 'true' },
      },
    },
    onClose: {
      action: 'onClose',
    },
  },
  args: {
    id: 'toast-bar',
    children: (
      <>
        <ToastBarMessage>Hello, World! This is a toast message with an action.</ToastBarMessage>
        <ToastBarLink href="#">Action</ToastBarLink>
      </>
    ),
    closeLabel: 'Close',
    color: 'inverted',
    hasIcon: false,
    iconName: '',
    isDismissible: false,
    isOpen: true,
    onClose: () => {},
  },
};

export default meta;
type Story = StoryObj<typeof ToastBar>;

const ToastBarComponent = (args: SpiritToastBarProps) => (
  <Toast alignmentY="top">
    <ToastBar {...args} />
  </Toast>
);

export const ToastBarPlayground: Story = {
  name: 'ToastBar',
  render: ToastBarComponent,
};
