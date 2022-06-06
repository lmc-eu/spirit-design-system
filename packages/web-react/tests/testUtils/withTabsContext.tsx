import React, { ElementType } from 'react';
import { TabsContextType, TabsProvider } from '../../src/components/Tabs/TabContext';

export const withTabsContext =
  (Component: ElementType, value = { selectedTabId: 0, selectTab: jest.fn() } as TabsContextType) =>
  (props: unknown) =>
    (
      <TabsProvider value={value}>
        <Component {...(props as object)} />
      </TabsProvider>
    );
