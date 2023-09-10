import React from 'react';
import { Markdown } from '@storybook/blocks';
import type { Meta, StoryObj } from '@storybook/react';

import ReadMe from '../README.md';
import { ButtonLink } from '..';
import { args, argTypes } from './args';

const meta: Meta<typeof ButtonLink> = {
  title: 'Components/ButtonLink',
  component: ButtonLink,
  parameters: {
    docs: {
      page: () => <Markdown>{ReadMe}</Markdown>,
    },
  },
  argTypes,
  args,
};

export default meta;
type Story = StoryObj<typeof ButtonLink>;

export const Playground: Story = {
  name: 'ButtonLink',
};
