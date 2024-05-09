import React from 'react';
import { UncontrolledTabsProps } from '../../types';
import { TabsProvider } from './TabContext';
import { useTab } from './useTabs';

const Tabs = ({ children, defaultSelectedTab, onSelectionChange }: UncontrolledTabsProps): JSX.Element => {
  const { selectedId, selectTab } = useTab(defaultSelectedTab);

  return <TabsProvider value={{ selectedId, selectTab, onSelectionChange }}>{children}</TabsProvider>;
};

export default Tabs;
