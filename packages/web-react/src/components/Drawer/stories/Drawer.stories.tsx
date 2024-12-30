import { Markdown } from '@storybook/blocks';
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import React from 'react';
import { AlignmentY } from '../../../constants';
import Drawer from '../Drawer';
import ReadMe from '../README.md';

const meta: Meta<typeof Drawer> = {
  title: 'Components/Drawer',
  component: Drawer,
  parameters: {
    docs: {
      page: () => <Markdown>{ReadMe}</Markdown>,
    },
  },
  argTypes: {},
  args: {
    alignmentY: AlignmentY.CENTER,
    id: 'modal',
    isOpen: false,
    onClose: fn(),
    closeOnEscapeKeyDown: true,
    closeOnBackdropClick: true,
  },
};

export default meta;
type Story = StoryObj<typeof Drawer>;
