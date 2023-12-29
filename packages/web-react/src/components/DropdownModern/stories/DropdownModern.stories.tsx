import React, { useState } from 'react';
import { Markdown } from '@storybook/blocks';
import type { Meta, StoryObj } from '@storybook/react';

import { Placements } from '../../../constants';
import { DropdownFullWidthModes, SpiritDropdownModernProps } from '../../../types';
import ReadMe from '../../Dropdown/README.md';
import { Button, Icon, Text } from '../..';
import { DropdownModern, DropdownTrigger, DropdownPopover } from '../../Dropdown';

const meta: Meta<typeof DropdownModern> = {
  title: 'Components/DropdownModern',
  component: DropdownModern,
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
        defaultValue: { summary: Placements.BOTTOM_LEFT },
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
    id: 'DropdownModernExample',
  },
};

export default meta;
type Story = StoryObj<typeof DropdownModern>;

const DropdownModernWithHooks = (args: SpiritDropdownModernProps) => {
  const { children, isOpen } = args;
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const onDropdownToggle = () => setIsDropdownOpen(!isDropdownOpen);

  return (
    <DropdownModern {...args} isOpen={isOpen || isDropdownOpen} onToggle={onDropdownToggle}>
      <DropdownTrigger elementType={Button}>Button as anchor</DropdownTrigger>
      <DropdownPopover>{children}</DropdownPopover>
    </DropdownModern>
  );
};

export const DropdownModernPlayground: Story = {
  name: 'DropdownModern',
  render: (args) => <DropdownModernWithHooks {...args} />,
};
