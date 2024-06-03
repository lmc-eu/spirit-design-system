import '@testing-library/jest-dom';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import React from 'react';
import { classNamePrefixProviderTest } from '../../../../tests/providerTests/classNamePrefixProviderTest';
import { restPropsTest } from '../../../../tests/providerTests/restPropsTest';
import { stylePropsTest } from '../../../../tests/providerTests/stylePropsTest';
import { withTabsContext } from '../../../../tests/testUtils/withTabsContext';
import TabItem from '../TabItem';

describe('TabItem', () => {
  stylePropsTest((props) => <TabItem forTabPane={1} data-testid="TabItemTestId" {...props} />, 'TabItemTestId');

  classNamePrefixProviderTest(() => <TabItem forTabPane={0} />, 'Tabs__item');

  restPropsTest((props) => <TabItem forTabPane={0} {...props} />, 'button');

  it('should render button tag when there is no href prop', () => {
    render(<TabItem forTabPane={0} />);

    const element = screen.getByRole('tab');

    expect(element).toHaveClass('Tabs__link');
  });

  it('should have ARIA attributtes', () => {
    render(<TabItem forTabPane="test" />);

    const element = screen.getByRole('tab');

    expect(element).toHaveAttribute('id', 'test-tab');
    expect(element).toHaveAttribute('aria-controls', 'test');
    expect(element).toHaveAttribute('type', 'button');
  });

  it('should handle tab switch when clicked', async () => {
    const selectTabMock = jest.fn();
    render(withTabsContext(TabItem, { selectedId: 0, selectTab: selectTabMock })({ forTabPane: 'test' }));

    fireEvent.click(screen.getByRole('tab'));

    await waitFor(() => expect(selectTabMock).toHaveBeenCalled());
  });
});
