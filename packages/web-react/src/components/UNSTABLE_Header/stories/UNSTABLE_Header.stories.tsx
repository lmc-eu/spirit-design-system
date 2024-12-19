import { Markdown } from '@storybook/blocks';
import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { ProductLogo } from '../../ProductLogo';
import { defaultSvgLogo } from '../../ProductLogo/demo/ProductLogoDefault';
import ReadMe from '../README.md';
import UNSTABLE_Header from '../UNSTABLE_Header';
import UNSTABLE_HeaderLogo from '../UNSTABLE_HeaderLogo';

const meta: Meta<typeof UNSTABLE_Header> = {
  title: 'Experimental/UNSTABLE_Header',
  component: UNSTABLE_Header,
  parameters: {
    docs: {
      page: () => <Markdown>{ReadMe}</Markdown>,
    },
  },
  args: {
    children: (
      <UNSTABLE_HeaderLogo href="/">
        <ProductLogo>{defaultSvgLogo}</ProductLogo>
      </UNSTABLE_HeaderLogo>
    ),
  },
};

export default meta;
type Story = StoryObj<typeof UNSTABLE_Header>;

export const Playground: Story = {
  name: 'UNSTABLE_Header',
};
