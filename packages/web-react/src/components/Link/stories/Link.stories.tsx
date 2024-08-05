import { Markdown } from '@storybook/blocks';
import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { ActionLinkColors } from '../../../constants';
import ReadMe from '../README.md';
import { Link } from '..';

const meta: Meta<typeof Link> = {
  title: 'Components/Link',
  component: Link,
  parameters: {
    docs: {
      page: () => <Markdown>{ReadMe}</Markdown>,
    },
  },
  argTypes: {
    children: {
      control: 'text',
    },
    color: {
      control: 'select',
      options: [...Object.values(ActionLinkColors)],
      table: {
        defaultValue: { summary: ActionLinkColors.PRIMARY },
      },
    },
    elementType: {
      control: 'text',
    },
    href: {
      control: 'text',
      defaultValue: 'https://www.example.com',
    },
    isDisabled: {
      control: 'boolean',
      table: {
        defaultValue: { summary: 'false' },
      },
    },
    isUnderlined: {
      control: 'boolean',
      description: '⚠️ **Deprecated**. Please use `underlined` instead. \n\n',
      table: {
        defaultValue: { summary: 'false' },
      },
    },
    target: {
      control: 'select',
      options: ['_blank', '_self', '_parent', '_top', undefined],
      table: {
        defaultValue: { summary: undefined },
      },
    },
    underlined: {
      control: 'select',
      options: [undefined, 'hover', 'always', 'never'],
      table: {
        defaultValue: { summary: 'undefined' },
      },
    },
  },
  args: {
    children: 'Link',
    color: ActionLinkColors.PRIMARY,
    elementType: 'a',
    href: 'https://www.example.com',
    isDisabled: false,
    isUnderlined: false,
    target: '_blank',
    underlined: undefined,
  },
};

export default meta;
type Story = StoryObj<typeof Link>;

export const Playground: Story = {
  name: 'Link',
};
