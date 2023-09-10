import React from 'react';
import { Markdown } from '@storybook/blocks';
import type { Meta, StoryObj } from '@storybook/react';

import { Breadcrumbs } from './Breadcrumbs';
import ReadMe from './README.md';

const meta: Meta<typeof Breadcrumbs> = {
  title: 'Components/Breadcrumbs',
  component: Breadcrumbs,
  parameters: {
    docs: {
      page: () => <Markdown>{ReadMe}</Markdown>,
    },
  },
  argTypes: {
    elementType: {
      control: 'text',
      table: {
        defaultValue: { summary: 'nav' },
      },
    },
    goBackTitle: {
      control: 'text',
      table: {
        defaultValue: { summary: 'Back' },
      },
    },
  },
  args: {
    elementType: 'nav',
    goBackTitle: 'Back',
    items: [
      {
        title: 'Root',
        url: '#rootUrl',
      },
      {
        title: 'Category',
        url: '#categoryUrl',
      },
      {
        title: 'Subcategory',
        url: '#subcategoryUrl',
      },
      {
        title: 'Current page',
        url: '#currentUrl',
      },
    ],
  },
};

export default meta;
type Story = StoryObj<typeof Breadcrumbs>;

export const Playground: Story = {
  name: 'Breadcrumbs',
};
