import React from 'react';
import { TabsProvider } from './TabContext';
import { TabsProps } from '../../types';

const Tabs = ({ children, selectedTab, toggle: selectTab, onSelectionChange }: TabsProps): JSX.Element => (
  <TabsProvider value={{ selectedId: selectedTab, selectTab, onSelectionChange }}>{children}</TabsProvider>
);

export default Tabs;
