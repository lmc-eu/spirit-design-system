import React from 'react';
import { ChildrenProps, TabId, TransferProps } from '../../types';
import { TabsProvider } from './TabContext';
import { useTab } from './useTabs';

interface TabsProps extends ChildrenProps, TransferProps {
  defaultSelectedTab: TabId;
  // eslint-disable-next-line react/require-default-props
  onSelectionChange?: (tabId: TabId) => void;
}

const Tabs = ({ children, defaultSelectedTab, onSelectionChange }: TabsProps): JSX.Element => {
  const { selectedTabId, selectTab } = useTab(defaultSelectedTab);

  return <TabsProvider value={{ selectedTabId, selectTab, onSelectionChange }}>{children}</TabsProvider>;
};

export default Tabs;
