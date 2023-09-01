import React, { useCallback, useState } from 'react';
import { Markdown } from '@storybook/blocks';
import type { Meta, StoryObj } from '@storybook/react';

import { TabId } from '../../types';
import ReadMe from './README.md';
import { TabContent, TabContentProps, TabItem, TabList, TabPane, Tabs } from '.';

const meta: Meta<typeof TabContent> = {
  title: 'Components/Tabs',
  component: TabContent,
  parameters: {
    docs: {
      page: () => <Markdown>{ReadMe}</Markdown>,
    },
  },
};

export default meta;
type Story = StoryObj<typeof TabContent>;

const TabsWithHooks = (args: TabContentProps) => {
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
      <TabContent {...args}>
        <TabPane tabId={1}>Pane 1</TabPane>
        <TabPane tabId={2}>Pane 2</TabPane>
      </TabContent>
    </Tabs>
  );
};

export const TabContentPlayground: Story = {
  name: 'TabContent',
  render: (args) => <TabsWithHooks {...args} />,
};
