import React, { useState } from 'react';
import { Markdown } from '@storybook/blocks';
import type { Meta, StoryObj } from '@storybook/react';

import { Placements } from '../../../constants';
import { DropdownFullWidthModes, SpiritDropdownProps } from '../../../types';
import ReadMe from '../README.md';
import { Button, Icon, Text } from '../..';
import { Dropdown, DropdownTrigger, DropdownPopover } from '..';

const meta: Meta<typeof Dropdown> = {
  title: 'Components/Dropdown',
  component: Dropdown,
  parameters: {
    docs: {
      page: () => <Markdown>{ReadMe}</Markdown>,
    },
    layout: 'centered',
  },
  argTypes: {
    children: {
      control: 'object',
    },
    enableAutoClose: {
      control: 'boolean',
      table: {
        defaultValue: { summary: true },
      },
    },
    fullWidthMode: {
      control: 'select',
      options: [...Object.values(DropdownFullWidthModes), undefined],
      table: {
        defaultValue: { summary: undefined },
      },
    },
    id: {
      control: 'text',
    },
    placement: {
      control: 'select',
      options: Object.values(Placements),
      table: {
        defaultValue: { summary: Placements.BOTTOM_START },
      },
    },
  },
  args: {
    children: (
      <>
        <a href="#info" className="d-flex mb-400">
          <Icon name="info" />
          <Text marginLeft="space-300">Information</Text>
        </a>
        <a href="#link" className="d-flex mb-400">
          <Icon name="link" />
          <Text marginLeft="space-300">More links</Text>
        </a>
        <a href="#profile" className="d-flex mb-400">
          <Icon name="profile" />
          <Text marginLeft="space-300">Profile</Text>
        </a>
        <a href="#help" className="d-flex">
          <Icon name="help" />
          <Text marginLeft="space-300">Help</Text>
        </a>
      </>
    ),
    id: 'dropdown-example',
    placement: Placements.BOTTOM_START,
  },
};

export default meta;
type Story = StoryObj<typeof Dropdown>;

const DropdownWithHooks = (args: SpiritDropdownProps) => {
  const { children, isOpen } = args;
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const onDropdownToggle = () => setIsDropdownOpen(!isDropdownOpen);

  return (
    <Dropdown {...args} isOpen={isOpen || isDropdownOpen} onToggle={onDropdownToggle}>
      <DropdownTrigger elementType={Button}>Button as anchor</DropdownTrigger>
      <DropdownPopover>{children}</DropdownPopover>
    </Dropdown>
  );
};

export const DropdownPlayground: Story = {
  name: 'Dropdown',
  render: (args) => <DropdownWithHooks {...args} />,
};
