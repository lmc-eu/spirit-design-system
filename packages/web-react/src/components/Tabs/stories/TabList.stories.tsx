import React, { useCallback, useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { TabId } from '../../../types';
import { TabContent, TabItem, TabList, TabListProps, TabPane, Tabs } from '..';

const meta: Meta<typeof TabList> = {
  title: 'Components/Tabs',
  component: TabList,
};

export default meta;
type Story = StoryObj<typeof TabList>;

const TabsWithHooks = (args: TabListProps) => {
  const [selectedTabId, setState] = useState<TabId>(1);

  const selectTab = useCallback((tabId: TabId) => {
    setState(tabId);
  }, []);

  return (
    <Tabs selectedTab={selectedTabId} toggle={selectTab}>
      <TabList {...args}>
        <TabItem forTab={1}>Item Selected</TabItem>
        <TabItem forTab={2}>Item</TabItem>
      </TabList>
      <TabContent>
        <TabPane tabId={1}>Pane 1</TabPane>
        <TabPane tabId={2}>Pane 2</TabPane>
      </TabContent>
    </Tabs>
  );
};

export const TabListPlayground: Story = {
  name: 'TabList',
  render: (args) => <TabsWithHooks {...args} />,
};
