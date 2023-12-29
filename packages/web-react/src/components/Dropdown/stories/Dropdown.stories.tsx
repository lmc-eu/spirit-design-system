import { Markdown } from '@storybook/blocks';
import type { Meta, StoryObj } from '@storybook/react';
import React, { Ref } from 'react';
import { Dropdown } from '..';
import { Button, Icon, Text } from '../..';
import { Placements } from '../../../constants';
import { DropdownFullWidthModes } from '../../../types';
import ReadMe from '../README.md';

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
    id: 'DropdownExample',
    placement: Placements.BOTTOM_LEFT,
  },
};

export default meta;
type Story = StoryObj<typeof Dropdown>;

export const Playground: Story = {
  name: 'Dropdown',
  render: (args) => (
    <Dropdown
      {...args}
      renderTrigger={({ isOpen, trigger: { className, ref, ...restOf } }) => (
        <Button UNSAFE_className={className} ref={ref as Ref<HTMLButtonElement>} {...restOf}>
          Trigger ({isOpen ? 'open' : 'closed'})
        </Button>
      )}
    />
  ),
};
