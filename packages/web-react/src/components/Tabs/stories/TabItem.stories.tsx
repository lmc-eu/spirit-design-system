import React, { useCallback, useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { TabId, TabItemProps } from '../../../types';
import { TabContent, TabItem, TabList, TabPane, Tabs } from '..';

const meta: Meta<typeof TabItem> = {
  title: 'Components/Tabs',
  component: TabItem,
};

export default meta;
type Story = StoryObj<typeof TabItem>;

const TabsWithHooks = (args: TabItemProps) => {
  const [selectedId, setState] = useState<TabId>(1);

  const selectTab = useCallback((id: TabId) => {
    setState(id);
  }, []);

  return (
    <Tabs selectedTab={selectedId} toggle={selectTab}>
      <TabList>
        <TabItem {...args} forTabPane={1}>
          Item Selected
        </TabItem>
        <TabItem forTabPane={2}>Item</TabItem>
      </TabList>
      <TabContent>
        <TabPane id={1}>Pane 1</TabPane>
        <TabPane id={2}>Pane 2</TabPane>
      </TabContent>
    </Tabs>
  );
};

export const TabItemPlayground: Story = {
  name: 'TabItem',
  render: (args) => <TabsWithHooks {...args} />,
};
