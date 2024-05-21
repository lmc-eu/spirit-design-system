import React, { useState } from 'react';
import { TabId } from '../../../types';
import Tabs from '../Tabs';
import TabList from '../TabList';
import TabItem from '../TabItem';
import TabLink from '../TabLink';
import TabContent from '../TabContent';
import TabPane from '../TabPane';

const TabsDefault = () => {
  const [selectedId, setSelectedId] = useState<TabId>(1);

  const selectTab = (id: TabId) => {
    setSelectedId(id);
  };

  return (
    <Tabs selectedTab={selectedId} toggle={selectTab}>
      <TabList>
        <TabItem forTabPane={1}>Item 1</TabItem>
        <TabItem forTabPane={2}>Item 2</TabItem>
        <TabLink href="https://www.example.com">Item link</TabLink>
        <TabLink href="https://www.example.com" itemProps={{ UNSAFE_className: 'd-none d-desktop-block' }}>
          Item link, desktop only
        </TabLink>
      </TabList>
      <TabContent>
        <TabPane id={1}>Pane 1 content</TabPane>
        <TabPane id={2}>Pane 2 content</TabPane>
      </TabContent>
    </Tabs>
  );
};

export default TabsDefault;
