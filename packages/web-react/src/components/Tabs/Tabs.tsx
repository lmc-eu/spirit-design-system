'use client';

import React from 'react';
import { TabsProps } from '../../types';
import { TabsProvider } from './TabContext';

const Tabs = ({ children, selectedTab, toggle: selectTab, onSelectionChange, spacing }: TabsProps): JSX.Element => (
  <TabsProvider value={{ selectedId: selectedTab, selectTab, onSelectionChange, spacing }}>{children}</TabsProvider>
);

export default Tabs;
