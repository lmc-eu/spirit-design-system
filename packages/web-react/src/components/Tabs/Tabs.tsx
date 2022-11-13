import React from 'react';
import { ChildrenProps, TabId, TransferProps } from '../../types';
import { TabsProvider, TabsToggler } from './TabContext';

interface TabsProps extends ChildrenProps, TransferProps {
  selectedTab: TabId;
  toggle: TabsToggler;
}

const Tabs = ({ children, selectedTab, toggle: selectTab }: TabsProps): JSX.Element => (
  <TabsProvider value={{ selectedTabId: selectedTab, selectTab }}>{children}</TabsProvider>
);

export default Tabs;
