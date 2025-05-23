'use client';

import React from 'react';
import { UncontrolledTabsProps } from '../../types';
import { TabsProvider } from './TabContext';
import { useTab } from './useTabs';

const UncontrolledTabs = ({
  children,
  defaultSelectedTab,
  onSelectionChange,
  spacing,
}: UncontrolledTabsProps): JSX.Element => {
  const { selectedId, selectTab } = useTab(defaultSelectedTab);

  return <TabsProvider value={{ selectedId, selectTab, onSelectionChange, spacing }}>{children}</TabsProvider>;
};

UncontrolledTabs.spiritComponent = 'UncontrolledTabs';

export default UncontrolledTabs;
