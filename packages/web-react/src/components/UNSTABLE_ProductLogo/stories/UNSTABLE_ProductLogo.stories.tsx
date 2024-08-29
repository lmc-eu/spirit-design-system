import { Markdown } from '@storybook/blocks';
import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { defaultSvgLogo } from '../demo/ProductLogoDefault';
import ReadMe from '../README.md';
import UNSTABLE_ProductLogo from '../UNSTABLE_ProductLogo';

const meta: Meta<typeof UNSTABLE_ProductLogo> = {
  title: 'Experimental/UNSTABLE_ProductLogo',
  component: UNSTABLE_ProductLogo,
  parameters: {
    docs: {
      page: () => <Markdown>{ReadMe}</Markdown>,
    },
  },
  args: {
    children: defaultSvgLogo,
  },
};

export default meta;
type Story = StoryObj<typeof UNSTABLE_ProductLogo>;

export const Default: Story = {
  name: 'UNSTABLE_ProductLogo',
};
