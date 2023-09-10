import React, { useCallback, useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { TabId } from '../../../types';
import { TabContent, TabItem, TabItemProps, TabList, TabPane, Tabs } from '..';

const meta: Meta<typeof TabItem> = {
  title: 'Components/Tabs',
  component: TabItem,
};

export default meta;
type Story = StoryObj<typeof TabItem>;

const TabsWithHooks = (args: TabItemProps) => {
  const [selectedTabId, setState] = useState<TabId>(1);

  const selectTab = useCallback((tabId: TabId) => {
    setState(tabId);
  }, []);

  return (
    <Tabs selectedTab={selectedTabId} toggle={selectTab}>
      <TabList>
        <TabItem {...args} forTab={1}>
          Item Selected
        </TabItem>
        <TabItem forTab={2}>Item</TabItem>
      </TabList>
      <TabContent>
        <TabPane tabId={1}>Pane 1</TabPane>
        <TabPane tabId={2}>Pane 2</TabPane>
      </TabContent>
    </Tabs>
  );
};

export const TabItemPlayground: Story = {
  name: 'TabItem',
  render: (args) => <TabsWithHooks {...args} />,
};
