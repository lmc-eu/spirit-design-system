import React from 'react';
import { accessibilitySelectedTest, accessibilityTest } from '@local/tests';
import TabContent from '../TabContent';
import TabItem from '../TabItem';
import TabList from '../TabList';
import TabPane from '../TabPane';
import Tabs from '../Tabs';

jest.mock('../../../hooks/useIcon');

describe('Tabs accessibility', () => {
  accessibilityTest(
    (props) => (
      <Tabs {...props} selectedTab={1} toggle={() => {}}>
        <TabList>
          <TabItem forTabPane={1}>Tab 1</TabItem>
          <TabItem forTabPane={2}>Tab 2</TabItem>
        </TabList>
        <TabContent>
          <TabPane id={1}>Content 1</TabPane>
          <TabPane id={2}>Content 2</TabPane>
        </TabContent>
      </Tabs>
    ),
    '[role="tablist"]',
  );

  accessibilitySelectedTest(
    (props) => (
      <Tabs {...props} selectedTab={2} toggle={() => {}}>
        <TabList>
          <TabItem forTabPane={1}>Tab 1</TabItem>
          <TabItem forTabPane={2}>Tab 2</TabItem>
        </TabList>
        <TabContent>
          <TabPane id={1}>Content 1</TabPane>
          <TabPane id={2}>Content 2</TabPane>
        </TabContent>
      </Tabs>
    ),
    '[role="tablist"]',
  );
});
