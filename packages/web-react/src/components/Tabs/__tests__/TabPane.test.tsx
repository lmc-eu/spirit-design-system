import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import React from 'react';
import { classNamePrefixProviderTest } from '../../../../tests/providerTests/classNamePrefixProviderTest';
import { stylePropsTest } from '../../../../tests/providerTests/stylePropsTest';
import { restPropsTest } from '../../../../tests/providerTests/restPropsTest';
import { withTabsContext } from '../../../../tests/testUtils/withTabsContext';
import { TabsContextType } from '../TabContext';
import Tabs from '../Tabs';
import TabContent from '../TabContent';
import TabPane from '../TabPane';

describe('TabPane', () => {
  stylePropsTest(
    (props) => (
      <Tabs selectedTab={1} toggle={() => {}}>
        <TabContent>
          <TabPane tabId={1} data-testid="TabPaneTestId" {...props} />
        </TabContent>
      </Tabs>
    ),
    'TabPaneTestId',
  );

  classNamePrefixProviderTest(
    withTabsContext((props) => <TabPane {...props} tabId="test" />, { selectedTabId: 'test' } as TabsContextType),
    'TabsPane',
  );

  restPropsTest(
    withTabsContext((props) => <TabPane {...props} tabId="test" />, { selectedTabId: 'test' } as TabsContextType),
    'div',
  );

  it('should not render tab pane if tab is not selected', () => {
    const dom = render(
      withTabsContext(TabPane, { selectedTabId: 'another-tab', selectTab: jest.fn() })({ tabId: 'test' }),
    );

    expect(dom.container.querySelector('#test') as HTMLElement).toBeNull();
  });
});
