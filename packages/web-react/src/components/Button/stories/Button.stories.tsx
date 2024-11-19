import { Markdown } from '@storybook/blocks';
import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { ActionButtonColors, EmotionColors, Sizes } from '../../../constants';
import { Icon } from '../../Icon';
import ReadMe from '../README.md';
import { Button } from '..';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    docs: {
      page: () => <Markdown>{ReadMe}</Markdown>,
    },
  },
  argTypes: {
    children: {
      control: 'text',
      description: `This is the place for the content of the button. In the real code you
        can pass in any JSX. In this demo you can set any text you want, or use one
        of the predefined texts: \`<Icon />\` (to see how it looks with an Icon) or
        \`<Icon /> Text\` (to see how it looks with an Icon and text).  Please note the
        predefined texts in this demo are not customizable and have to be written exactly
        as shown.`,
      mapping: {
        '<Icon />': <Icon name="profile" />,
        '<Icon /> Text': (
          <>
            <Icon name="profile" marginRight="space-400" /> Text
          </>
        ),
      },
    },
    color: {
      control: 'select',
      options: [...Object.values(ActionButtonColors), ...Object.values(EmotionColors)],
      table: {
        defaultValue: { summary: ActionButtonColors.PRIMARY },
      },
    },
    isBlock: {
      control: 'boolean',
    },
    isDisabled: {
      control: 'boolean',
    },
    isLoading: {
      control: 'boolean',
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
    children: 'Click me',
    color: ActionButtonColors.PRIMARY,
    isBlock: false,
    isDisabled: false,
    isLoading: false,
    isSymmetrical: false,
    size: Sizes.MEDIUM,
    type: 'button',
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Playground: Story = {
  name: 'Button',
};
