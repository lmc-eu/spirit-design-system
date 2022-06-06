import React from 'react';
import { ChildrenProps, TabId } from '../../types';
import { useTabContext } from './TabContext';
import { useTabsStyleProps } from './useTabsStyleProps';

interface TabPaneProps extends ChildrenProps {
  tabId: TabId;
}

const TabPane = ({ children, tabId }: TabPaneProps): JSX.Element | null => {
  const { selectedTabId } = useTabContext();
  const { classProps } = useTabsStyleProps({ tabId, selectedTabId });

  return selectedTabId === tabId ? (
    <div id={tabId.toString()} className={classProps.pane} role="tabpanel" aria-labelledby={`${tabId}-tab`}>
      {children}
    </div>
  ) : null;
};

export default TabPane;
