import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import React from 'react';
import { classNamePrefixProviderTest } from '../../../../tests/providerTests/classNamePrefixProviderTest';
import { withTabsContext } from '../../../../tests/testUtils/withTabsContext';
import { TabsContextType } from '../TabContext';
import TabPane from '../TabPane';

describe('TabPane', () => {
  classNamePrefixProviderTest(
    withTabsContext((props) => <TabPane {...props} tabId="test" />, { selectedTabId: 'test' } as TabsContextType),
    'Tabs-pane',
  );

  it('should not render tab pane if tab is not selected', () => {
    const dom = render(
      withTabsContext(TabPane, { selectedTabId: 'another-tab', selectTab: jest.fn() })({ tabId: 'test' }),
    );

    expect(dom.container.querySelector('#test') as HTMLElement).toBeNull();
  });
});
