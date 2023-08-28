import React from 'react';
import { Markdown } from '@storybook/blocks';
import type { Meta, StoryObj } from '@storybook/react';

import { ButtonLink } from './ButtonLink';
import { args, argTypes } from './stories/args';
import ReadMe from './README.md';

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
