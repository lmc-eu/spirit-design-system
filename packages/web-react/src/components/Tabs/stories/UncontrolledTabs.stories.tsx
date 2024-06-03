import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { TabContent, TabItem, TabList, TabPane, UncontrolledTabs } from '..';

const meta: Meta<typeof UncontrolledTabs> = {
  title: 'Components/Tabs',
  component: UncontrolledTabs,
  argTypes: {
    defaultSelectedTab: {
      control: {
        type: 'string',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof UncontrolledTabs>;

export const UncontrolledTabsPlayground: Story = {
  name: 'UncontrolledTabs',
  render: (args) => (
    <UncontrolledTabs {...args} defaultSelectedTab={1}>
      <TabList>
        <TabItem forTabPane={1}>Item Selected</TabItem>
        <TabItem forTabPane={2}>Item</TabItem>
      </TabList>
      <TabContent>
        <TabPane id={1}>Pane 1</TabPane>
        <TabPane id={2}>Pane 2</TabPane>
      </TabContent>
    </UncontrolledTabs>
  ),
};
