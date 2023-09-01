import React from 'react';
import { Markdown } from '@storybook/blocks';
import type { Meta, StoryObj } from '@storybook/react';

import { PaginationButtonLink } from '.';
import ReadMe from './README.md';

const meta: Meta<typeof PaginationButtonLink> = {
  title: 'Components/Pagination',
  component: PaginationButtonLink,
  parameters: {
    docs: {
      page: () => <Markdown>{ReadMe}</Markdown>,
    },
  },
  argTypes: {
    accessibilityLabel: {
      control: 'text',
    },
    direction: {
      control: 'select',
      options: ['next', 'previous'],
    },
  },
  args: {
    accessibilityLabel: 'Next',
    direction: 'next',
  },
};

export default meta;
type Story = StoryObj<typeof PaginationButtonLink>;

export const PaginationButtonLinkPlayground: Story = {
  name: 'PaginationButtonLink',
};
