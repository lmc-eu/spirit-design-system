import React from 'react';
import TabContent from '../TabContent';
import TabItem from '../TabItem';
import TabList from '../TabList';
import TabPane from '../TabPane';
import UncontrolledTabs from '../UncontrolledTabs';

// @see: https://github.com/storybookjs/storybook/issues/8104#issuecomment-932310244
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Story = (props: unknown) => (
  <UncontrolledTabs defaultSelectedTab={1}>
    <TabList>
      <TabItem forTab={1}>Item Selected</TabItem>
      <TabItem forTab={2}>Item</TabItem>
    </TabList>
    <TabContent>
      <TabPane tabId={1}>Pane 1</TabPane>
      <TabPane tabId={2}>Pane 2</TabPane>
    </TabContent>
  </UncontrolledTabs>
);

export default Story;
