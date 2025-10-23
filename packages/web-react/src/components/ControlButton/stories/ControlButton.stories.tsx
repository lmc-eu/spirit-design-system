import { Markdown } from '@storybook/blocks';
import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Sizes } from '../../../constants';
import { Icon } from '../../Icon';
import ReadMe from '../README.md';
import { ControlButton } from '..';

const meta: Meta<typeof ControlButton> = {
  title: 'Components/ControlButton',
  component: ControlButton,
  parameters: {
    docs: {
      page: () => <Markdown>{ReadMe}</Markdown>,
    },
  },
  argTypes: {
    children: {
      control: 'text',
      description: `Content of the button, typically an Icon for icon-only buttons. In this demo you can
        set any text you want, or use the predefined text: \`<Icon />\` (to see how it looks with an Icon).
        Please note the predefined text in this demo is not customizable and has to be written exactly as shown.`,
      mapping: {
        '<Icon />': <Icon name="close" />,
      },
    },
    isDisabled: {
      control: 'boolean',
    },
    isSubtle: {
      control: 'boolean',
      description: 'Whether the button is in subtle variant (without border)',
    },
    isSymmetrical: {
      control: 'boolean',
    },
    size: {
      control: 'select',
      options: [...Object.values(Sizes)],
    },
    type: {
      control: 'select',
      options: ['button', 'submit', 'reset'],
    },
  },
  args: {
    children: '<Icon />',
    isDisabled: false,
    isSubtle: false,
    isSymmetrical: true,
    size: Sizes.MEDIUM,
    type: 'button',
    'aria-label': 'Close',
  },
};

export default meta;
type Story = StoryObj<typeof ControlButton>;

export const Playground: Story = {
  name: 'ControlButton',
};
