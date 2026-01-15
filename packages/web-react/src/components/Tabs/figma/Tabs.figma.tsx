import figma from '@figma/code-connect';
import React from 'react';
import TabContent from '../TabContent';
import TabItem from '../TabItem';
import TabList from '../TabList';
import TabPane from '../TabPane';
import Tabs from '../Tabs';

figma.connect(Tabs, '<FIGMA_FILE_ID>?node-id=4611%3A4332', {
  props: {},
  example: (props) => (
    <Tabs selectedTab={1} toggle={() => {}} {...props}>
      <TabList>
        <TabItem forTabPane={1}>Item 1</TabItem>
        <TabItem forTabPane={2}>Item 2</TabItem>
      </TabList>
      <TabContent>
        <TabPane id={1}>Pane 1</TabPane>
        <TabPane id={2}>Pane 2</TabPane>
      </TabContent>
    </Tabs>
  ),
});
