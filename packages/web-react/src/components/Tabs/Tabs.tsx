import React from 'react';
import { ChildrenProps, TabId } from '../../types';
import { TabsProvider } from './TabContext';
import { useTab } from './useTabs';

interface TabsProps extends ChildrenProps {
  defaultSelectedTab: TabId;
}

const Tabs = ({ children, defaultSelectedTab }: TabsProps): JSX.Element => {
  const { selectedTabId, selectTab } = useTab(defaultSelectedTab);

  return <TabsProvider value={{ selectedTabId, selectTab }}>{children}</TabsProvider>;
};

export default Tabs;
