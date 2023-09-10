import React from 'react';
import { Markdown } from '@storybook/blocks';
import type { Meta, StoryObj } from '@storybook/react';

import ReadMe from '../README.md';
import { Button } from '..';
import { args, argTypes } from './args';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    docs: {
      page: () => <Markdown>{ReadMe}</Markdown>,
    },
  },
  argTypes: {
    ...argTypes,
    type: {
      control: 'select',
      options: ['button', 'submit', 'reset'],
    },
  },
  args: {
    ...args,
    type: 'button',
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Playground: Story = {
  name: 'Button',
};
