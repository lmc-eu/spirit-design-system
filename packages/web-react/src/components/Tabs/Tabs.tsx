import React from 'react';
import { ChildrenProps, TabId, TransferProps } from '../../types';
import { TabsProvider, TabsToggler } from './TabContext';

export interface TabsProps extends ChildrenProps, TransferProps {
  selectedTab: TabId;
  toggle: TabsToggler;
  // eslint-disable-next-line react/require-default-props
  onSelectionChange?: (tabId: TabId) => void;
}

const Tabs = ({ children, selectedTab, toggle: selectTab, onSelectionChange }: TabsProps): JSX.Element => (
  <TabsProvider value={{ selectedTabId: selectedTab, selectTab, onSelectionChange }}>{children}</TabsProvider>
);

export default Tabs;
