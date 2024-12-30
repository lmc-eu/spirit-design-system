import { Markdown } from '@storybook/blocks';
import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { AlignmentX } from '../../../constants';
import { DRAWER_CLOSE_BUTTON_LABEL_DEFAULT } from '../constants';
import Drawer from '../Drawer';
import DrawerCloseButton from '../DrawerCloseButton';
import DrawerPanel from '../DrawerPanel';
import ReadMe from '../README.md';

const meta: Meta<typeof DrawerCloseButton> = {
  title: 'Components/Drawer',
  component: DrawerCloseButton,
  parameters: {
    docs: {
      page: () => <Markdown>{ReadMe}</Markdown>,
    },
  },
  argTypes: {
    label: {
      control: 'text',
      table: {
        defaultValue: { summary: DRAWER_CLOSE_BUTTON_LABEL_DEFAULT },
      },
    },
  },
  args: {
    label: DRAWER_CLOSE_BUTTON_LABEL_DEFAULT,
  },
};

export default meta;
type Story = StoryObj<typeof DrawerPanel>;

export const DrawerCloseButtonPlayground: Story = {
  name: 'DrawerCloseButton',
  render: (args) => (
    <Drawer
      alignmentX={AlignmentX.RIGHT}
      id="drawer-panel-demo"
      isOpen
      onClose={() => {}}
      closeOnBackdropClick={false}
      closeOnEscapeKeyDown={false}
    >
      <DrawerPanel>
        <DrawerCloseButton label={args.label} />
        <div className="p-800">Drawer content</div>
      </DrawerPanel>
    </Drawer>
  ),
};
