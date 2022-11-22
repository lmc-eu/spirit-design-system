import '@testing-library/jest-dom';
import { fireEvent, render, waitFor } from '@testing-library/react';
import React from 'react';
import { classNamePrefixProviderTest } from '../../../../tests/providerTests/classNamePrefixProviderTest';
import { restPropsTest } from '../../../../tests/providerTests/restPropsTest';
import { withTabsContext } from '../../../../tests/testUtils/withTabsContext';
import TabItem from '../TabItem';

describe('TabItem', () => {
  classNamePrefixProviderTest(() => <TabItem forTab={0} />, 'Tabs__item');

  restPropsTest((props) => <TabItem forTab={0} {...props} />, 'button');

  it('should render button tag when there is no href prop', () => {
    const dom = render(<TabItem forTab={0} />);

    const element = dom.container.querySelector('button') as HTMLElement;
    expect(element).toHaveClass('Tabs__link');
  });

  it('should have ARIA attributtes', () => {
    const dom = render(<TabItem forTab="test" />);

    const element = dom.container.querySelector('button') as HTMLElement;
    expect(element).toHaveAttribute('id', 'test-tab');
    expect(element).toHaveAttribute('aria-controls', 'test');
    expect(element).toHaveAttribute('type', 'button');
  });

  it('should handle tab switch when clicked', async () => {
    const selectTabMock = jest.fn();
    const dom = render(withTabsContext(TabItem, { selectedTabId: 0, selectTab: selectTabMock })({ forTab: 'test' }));

    fireEvent.click(dom.getByRole('tab') as HTMLElement);

    await waitFor(() => expect(selectTabMock).toHaveBeenCalled());
  });
});
