import React from 'react';
// @ts-ignore: No declaration -- The library is not installed; we don't need to install it for fixtures.
import { TabItem, TabPane } from '@lmc-eu/spirit-web-react';

export const MyComponent = () => (
  <>
    <TabItem forTab="tab1" data-test="test" />
    <TabPane tabId="tab1" />
  </>
);
