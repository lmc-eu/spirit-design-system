import React from 'react';
import { ChildrenProps, TabId, TransferProps } from '../../types';
import { useTabContext } from './TabContext';
import { useTabsStyleProps } from './useTabsStyleProps';

interface TabPaneProps extends ChildrenProps, TransferProps {
  tabId: TabId;
}

const TabPane = ({ children, tabId, ...restProps }: TabPaneProps): JSX.Element | null => {
  const { selectedTabId } = useTabContext();
  const { classProps } = useTabsStyleProps({ tabId, selectedTabId });

  return selectedTabId === tabId ? (
    <div
      {...restProps}
      id={tabId.toString()}
      className={classProps.pane}
      role="tabpanel"
      aria-labelledby={`${tabId}-tab`}
    >
      {children}
    </div>
  ) : null;
};

export default TabPane;
