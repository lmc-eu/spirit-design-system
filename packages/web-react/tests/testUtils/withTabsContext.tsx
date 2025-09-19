'use client';

import React, { type ElementType } from 'react';
import { type TabsContextType, TabsProvider } from '../../src';

export const withTabsContext =
  (Component: ElementType, value = { selectedId: 0, selectTab: jest.fn() } as TabsContextType) =>
  (props: unknown) => (
    <TabsProvider value={value}>
      <Component {...(props as object)} />
    </TabsProvider>
  );
