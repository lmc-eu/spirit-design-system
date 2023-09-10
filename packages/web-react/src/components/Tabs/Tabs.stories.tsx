import React, { useCallback, useState } from 'react';
import { Markdown } from '@storybook/blocks';
import type { Meta, StoryObj } from '@storybook/react';

import { TabId } from '../../types';
import ReadMe from './README.md';
import { TabContent, TabItem, TabList, TabPane, Tabs, TabsProps } from '.';

const meta: Meta<typeof Tabs> = {
  title: 'Components/Tabs',
  component: Tabs,
  parameters: {
    docs: {
      page: () => <Markdown>{ReadMe}</Markdown>,
    },
  },
};

export default meta;
type Story = StoryObj<typeof Tabs>;

const TabsWithHooks = (args: TabsProps) => {
  const [selectedTabId, setState] = useState<TabId>(1);

  const selectTab = useCallback((tabId: TabId) => {
    setState(tabId);
  }, []);

  return (
    <Tabs {...args} selectedTab={selectedTabId} toggle={selectTab}>
      <TabList>
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

export const Playground: Story = {
  name: 'Tabs',
  render: (args) => <TabsWithHooks {...args} />,
};
