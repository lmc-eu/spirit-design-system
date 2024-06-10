import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
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
          <TabPane id={1} data-testid="TabPaneTestId" {...props} />
        </TabContent>
      </Tabs>
    ),
    'TabPaneTestId',
  );

  classNamePrefixProviderTest(
    withTabsContext((props) => <TabPane {...props} id="test" />, { selectedId: 'test' } as TabsContextType),
    'TabsPane',
  );

  restPropsTest(
    withTabsContext((props) => <TabPane {...props} id="test" />, { selectedId: 'test' } as TabsContextType),
    'div',
  );

  it('should not render tab pane if tab is not selected', () => {
    render(withTabsContext(TabPane, { selectedId: 'another-tab', selectTab: jest.fn() })({ id: 'test' }));

    expect(screen.queryByRole('tabpanel')).not.toBeInTheDocument();
  });

  it('should render tab pane if tab is selected', () => {
    render(withTabsContext(TabPane, { selectedId: 'test', selectTab: jest.fn() })({ id: 'test' }));

    const tabPane = screen.queryByRole('tabpanel');

    expect(tabPane).toBeInTheDocument();
    expect(tabPane).toHaveAttribute('id', 'test');
    expect(tabPane).toHaveAttribute('aria-labelledby', 'test-tab');
    expect(tabPane).toHaveClass('TabsPane');
    expect(tabPane).toHaveClass('is-selected');
  });
});
