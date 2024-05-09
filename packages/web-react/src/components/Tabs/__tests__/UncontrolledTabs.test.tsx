import '@testing-library/jest-dom';
import { render, waitFor, screen } from '@testing-library/react';
import user from '@testing-library/user-event';
import React from 'react';
import TabList from '../TabList';
import TabItem from '../TabItem';
import TabContent from '../TabContent';
import TabPane from '../TabPane';
import UncontrolledTabs from '../UncontrolledTabs';

describe('UncontrolledTabs', () => {
  const tabs = (
    <>
      <TabList>
        <TabItem forTabPane={1} data-testid="item-1">
          Item Selected
        </TabItem>
        <TabItem forTabPane={2} data-testid="item-2">
          Item Not Selected
        </TabItem>
      </TabList>
      <TabContent>
        <TabPane id={1} data-testid="pane-1">
          Pane 1
        </TabPane>
        <TabPane id={2} data-testid="pane-2">
          Pane 2
        </TabPane>
      </TabContent>
    </>
  );

  it('should open default tab', () => {
    render(<UncontrolledTabs defaultSelectedTab={1}>{tabs}</UncontrolledTabs>);

    const tabItem1 = screen.getByTestId('item-1');
    const tabItem2 = screen.getByTestId('item-2');
    const tabPane1 = screen.getByTestId('pane-1');

    expect(tabItem1).toHaveClass('is-selected');
    expect(tabItem2).not.toHaveClass('is-selected');
    expect(tabPane1).toHaveClass('is-selected');
  });

  it('should switch tabs by click', async () => {
    render(<UncontrolledTabs defaultSelectedTab={1}>{tabs}</UncontrolledTabs>);

    const tabItem1 = screen.getByTestId('item-1');
    const tabItem2 = screen.getByTestId('item-2');
    const tabPane1 = screen.getByTestId('pane-1');

    expect(tabItem1).toHaveClass('is-selected');
    expect(tabItem2).not.toHaveClass('is-selected');
    expect(tabPane1).toHaveClass('is-selected');

    user.click(screen.getByText(/Item Not Selected/i));

    await waitFor(() => {
      expect(tabItem1).not.toHaveClass('is-selected');
      expect(tabItem2).toHaveClass('is-selected');
      expect(screen.getByTestId('pane-2')).toHaveClass('is-selected');
    });
  });
});
