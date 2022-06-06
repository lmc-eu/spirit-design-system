import React from 'react';
import TabContent from '../TabContent';
import TabItem from '../TabItem';
import TabLink from '../TabLink';
import TabList from '../TabList';
import TabPane from '../TabPane';
import Tabs from '../Tabs';

// @see: https://github.com/storybookjs/storybook/issues/8104#issuecomment-932310244
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Story = (props: unknown) => (
  <Tabs defaultSelectedTab={1}>
    <TabList>
      <TabItem forTab={1}>Item Selected</TabItem>
      <TabItem forTab={2}>Item</TabItem>
      <TabLink href="https://www.example.com">Item Link</TabLink>
      <TabLink href="https://www.example.com">Item Link Only Desktop</TabLink>
    </TabList>
    <TabContent>
      <TabPane tabId={1}>Pane 1</TabPane>
      <TabPane tabId={2}>Pane 2</TabPane>
    </TabContent>
  </Tabs>
);

export default Story;
