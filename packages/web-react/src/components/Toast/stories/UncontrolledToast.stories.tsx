import { Markdown } from '@storybook/blocks';
import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { ToastItem, ToastProvider, UncontrolledToast } from '..';
import { AlignmentX, EmotionColors } from '../../../constants';
import { ToastColorType, UncontrolledToastProps } from '../../../types';
import { Button } from '../../Button';
import ReadMe from '../README.md';
import { DEFAULT_TOAST_AUTO_CLOSE_INTERVAL } from '../constants';
import { useToast } from '../useToast';

interface UncontrolledToastPlaygroundProps extends UncontrolledToastProps, ToastItem {}

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
      table: {
        defaultValue: { summary: 'Close' },
      },
    },
    hasIcon: {
      control: 'boolean',
      table: {
        defaultValue: { summary: false },
      },
    },
    isDismissible: {
      control: 'boolean',
      table: {
        defaultValue: { summary: false },
      },
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
      table: {
        defaultValue: { summary: true },
      },
    },
    enableAutoClose: {
      control: 'boolean',
      table: {
        defaultValue: { summary: true },
      },
    },
    autoCloseInterval: {
      control: 'number',
      table: {
        defaultValue: { summary: DEFAULT_TOAST_AUTO_CLOSE_INTERVAL },
      },
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
    enableAutoClose: true,
    autoCloseInterval: DEFAULT_TOAST_AUTO_CLOSE_INTERVAL,
  },
};

export default meta;
type Story = StoryObj<UncontrolledToastPlaygroundProps>;

const ShowButton = (props: {
  autoCloseInterval?: number;
  color: ToastColorType;
  enableAutoClose?: boolean;
  hasIcon: boolean;
  iconName?: string;
  isDismissible: boolean;
  text: string | JSX.Element;
}) => {
  const { text, color, hasIcon, isDismissible, iconName, enableAutoClose, autoCloseInterval } = props;
  const { show, clear } = useToast();

  return (
    <>
      <Button
        type="button"
        onClick={() =>
          show(text, Date.now().toString(), {
            color,
            hasIcon,
            isDismissible,
            iconName,
            enableAutoClose,
            autoCloseInterval,
          })
        }
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
  const { children, color, hasIcon, isDismissible, iconName, enableAutoClose, autoCloseInterval } = args;

  return (
    <ToastProvider>
      <ShowButton
        autoCloseInterval={autoCloseInterval}
        color={color}
        enableAutoClose={enableAutoClose}
        hasIcon={hasIcon}
        iconName={iconName}
        isDismissible={isDismissible}
        text={children as string | JSX.Element}
      />
      <UncontrolledToast {...args} />
    </ToastProvider>
  );
};

export const UncontrolledToastPlayground: Story = {
  name: 'UncontrolledToast',
  render: UncontrolledToastComponent,
};
