import React from 'react';
import { TabsProps } from '../../types';
import { TabsProvider } from './TabContext';

const Tabs = ({ children, selectedTab, toggle: selectTab, onSelectionChange }: TabsProps): JSX.Element => (
  <TabsProvider value={{ selectedId: selectedTab, selectTab, onSelectionChange }}>{children}</TabsProvider>
);

export default Tabs;
