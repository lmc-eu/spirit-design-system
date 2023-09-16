import React, { useState } from 'react';
import { TabId } from '../../../types';
import Tabs from '../Tabs';
import TabList from '../TabList';
import TabItem from '../TabItem';
import TabLink from '../TabLink';
import TabContent from '../TabContent';
import TabPane from '../TabPane';

const TabsDefault = () => {
  const [selectedTabId, setSelectedTabId] = useState<TabId>(1);

  const selectTab = (tabId: TabId) => {
    setSelectedTabId(tabId);
  };

  return (
    <Tabs selectedTab={selectedTabId} toggle={selectTab}>
      <TabList>
        <TabItem forTab={1}>Item 1</TabItem>
        <TabItem forTab={2}>Item 2</TabItem>
        <TabLink href="https://www.example.com">Item link</TabLink>
        <TabLink href="https://www.example.com" itemProps={{ UNSAFE_className: 'd-none d-desktop-block' }}>
          Item link, desktop only
        </TabLink>
      </TabList>
      <TabContent>
        <TabPane tabId={1}>Pane 1 content</TabPane>
        <TabPane tabId={2}>Pane 2 content</TabPane>
      </TabContent>
    </Tabs>
  );
};

export default TabsDefault;
