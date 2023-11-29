import React, { useCallback, useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { TabId, TabLinkProps } from '../../../types';
import { TabContent, TabItem, TabLink, TabList, TabPane, Tabs } from '..';

const meta: Meta<typeof TabLink> = {
  title: 'Components/Tabs',
  component: TabLink,
  argTypes: {
    href: {
      control: {
        type: 'text',
      },
    },
  },
  args: {
    href: 'https://www.example.com',
  },
};

export default meta;
type Story = StoryObj<typeof TabLink>;

const TabsWithHooks = (args: TabLinkProps) => {
  const [selectedTabId, setState] = useState<TabId>(1);

  const selectTab = useCallback((tabId: TabId) => {
    setState(tabId);
  }, []);

  return (
    <Tabs selectedTab={selectedTabId} toggle={selectTab}>
      <TabList {...args}>
        <TabItem forTab={1}>Item Selected</TabItem>
        <TabItem forTab={2}>Item</TabItem>
        <TabLink {...args}>Item Link</TabLink>
      </TabList>
      <TabContent>
        <TabPane tabId={1}>Pane 1</TabPane>
        <TabPane tabId={2}>Pane 2</TabPane>
      </TabContent>
    </Tabs>
  );
};

export const TabLinkPlayground: Story = {
  name: 'TabLink',
  render: (args) => <TabsWithHooks {...args} />,
};
