import React, { useCallback, useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { TabId } from '../../../types';
import { TabContent, TabItem, TabList, TabPane, TabPaneProps, Tabs } from '..';

const meta: Meta<typeof TabPane> = {
  title: 'Components/Tabs',
  component: TabPane,
};

export default meta;
type Story = StoryObj<typeof TabPane>;

const TabsWithHooks = (args: TabPaneProps) => {
  const [selectedTabId, setState] = useState<TabId>(1);

  const selectTab = useCallback((tabId: TabId) => {
    setState(tabId);
  }, []);

  return (
    <Tabs selectedTab={selectedTabId} toggle={selectTab}>
      <TabList>
        <TabItem forTab={1}>Item Selected</TabItem>
        <TabItem forTab={2}>Item</TabItem>
      </TabList>
      <TabContent>
        <TabPane {...args} tabId={1}>
          Pane 1
        </TabPane>
        <TabPane tabId={2}>Pane 2</TabPane>
      </TabContent>
    </Tabs>
  );
};

export const TabPanePlayground: Story = {
  name: 'TabPane',
  render: (args) => <TabsWithHooks {...args} />,
};
