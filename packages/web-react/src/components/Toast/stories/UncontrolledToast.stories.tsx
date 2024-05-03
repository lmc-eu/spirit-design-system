import React from 'react';
import { Markdown } from '@storybook/blocks';
import type { Meta, StoryObj } from '@storybook/react';

import { ToastColorType, UncontrolledToastProps } from '../../../types';
import { AlignmentX, EmotionColors } from '../../../constants';
import { Button } from '../../Button';
import ReadMe from '../README.md';
import { useToast } from '../useToast';
import { ToastProvider, UncontrolledToast } from '..';

interface UncontrolledToastPlaygroundProps extends UncontrolledToastProps {
  color: ToastColorType;
  hasIcon: boolean;
  isDismissible: boolean;
  iconName: string;
}

const meta: Meta<UncontrolledToastPlaygroundProps> = {
  title: 'Components/Toast',
  component: UncontrolledToast,
  parameters: {
    docs: {
      page: () => <Markdown>{ReadMe}</Markdown>,
    },
  },
  argTypes: {
    children: {
      control: 'text',
    },
    alignmentX: {
      control: 'select',
      options: [...Object.values(AlignmentX)],
      table: {
        defaultValue: { summary: 'center' },
      },
    },
    alignmentY: {
      control: 'select',
      options: ['top', 'bottom'],
      table: {
        defaultValue: { summary: 'bottom' },
      },
    },
    closeLabel: {
      control: 'text',
    },
    hasIcon: {
      control: 'boolean',
    },
    isDismissible: {
      control: 'boolean',
    },
    color: {
      control: 'select',
      options: ['inverted', ...Object.values(EmotionColors)],
      table: {
        defaultValue: { summary: 'inverted' },
      },
    },
    iconName: {
      control: 'text',
    },
    isCollapsible: {
      control: 'boolean',
    },
  },
  args: {
    children: 'Hello, World!',
    alignmentX: 'center',
    alignmentY: 'bottom',
    closeLabel: 'Close',
    hasIcon: false,
    isDismissible: true,
    color: 'inverted',
    iconName: '',
    isCollapsible: true,
  },
};

export default meta;
type Story = StoryObj<UncontrolledToastPlaygroundProps>;

const ShowButton = (props: {
  text: string | JSX.Element;
  color: ToastColorType;
  hasIcon: boolean;
  isDismissible: boolean;
  iconName: string;
}) => {
  const { text, color, hasIcon, isDismissible, iconName } = props;
  const { show, clear } = useToast();

  return (
    <>
      <Button
        type="button"
        onClick={() => show(text, Date.now().toString(), { color, hasIcon, isDismissible, iconName })}
        marginBottom="space-400"
      >
        Show Toast
      </Button>
      <br />
      <Button type="button" onClick={() => clear()}>
        Clear queue
      </Button>
    </>
  );
};

const UncontrolledToastComponent = (args: UncontrolledToastPlaygroundProps) => {
  const { children, color, hasIcon, isDismissible, iconName } = args;

  return (
    <ToastProvider>
      <ShowButton
        text={children as string | JSX.Element}
        color={color}
        hasIcon={hasIcon}
        isDismissible={isDismissible}
        iconName={iconName}
      />
      <UncontrolledToast {...args} />
    </ToastProvider>
  );
};

export const UncontrolledToastPlayground: Story = {
  name: 'UncontrolledToast',
  render: UncontrolledToastComponent,
};
