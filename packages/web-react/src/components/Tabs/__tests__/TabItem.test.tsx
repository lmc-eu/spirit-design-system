import '@testing-library/jest-dom';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import React from 'react';
import {
  ariaAttributesTest,
  classNamePrefixProviderTest,
  restPropsTest,
  stylePropsTest,
  validHtmlAttributesTest,
  withTabsContext,
} from '@local/tests';
import TabItem from '../TabItem';

describe('TabItem', () => {
  stylePropsTest((props) => <TabItem forTabPane={1} data-testid="tab-item-test-id" {...props} />, 'tab-item-test-id');

  classNamePrefixProviderTest(() => <TabItem forTabPane={0} />, 'Tabs__item');

  restPropsTest((props) => <TabItem forTabPane={0} {...props} />, 'button');

  validHtmlAttributesTest(TabItem, { forTabPane: 0 });

  ariaAttributesTest(TabItem, { forTabPane: 0 });

  it('should render list item', () => {
    render(<TabItem forTabPane={0} />);

    const element = screen.getByRole('presentation');

    expect(element).toHaveClass('Tabs__item');
  });

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

  it('should return previousId and currentId when clicked', async () => {
    const onSelectionChangeMock = jest.fn();
    render(
      withTabsContext(TabItem, { selectedId: 1, selectTab: () => {}, onSelectionChange: onSelectionChangeMock })({
        forTabPane: 2,
      }),
    );

    fireEvent.click(screen.getByRole('tab'));

    await waitFor(() => expect(onSelectionChangeMock).toHaveBeenCalledWith(1, 2));
  });
});
