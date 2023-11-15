import React from 'react';
import classNames from 'classnames';
import { useStyleProps } from '../../hooks';
import { ChildrenProps, TabId, TransferProps } from '../../types';
import { useTabContext } from './TabContext';
import { useTabsStyleProps } from './useTabsStyleProps';

export interface TabPaneProps extends ChildrenProps, TransferProps {
  tabId: TabId;
}

const TabPane = ({ children, tabId, ...restProps }: TabPaneProps): JSX.Element | null => {
  const { selectedTabId } = useTabContext();
  const { classProps } = useTabsStyleProps({ tabId, selectedTabId });
  const { styleProps, props: transferProps } = useStyleProps(restProps);

  return selectedTabId === tabId ? (
    <div
      {...transferProps}
      {...styleProps}
      id={tabId.toString()}
      className={classNames(classProps.pane, styleProps.className)}
      role="tabpanel"
      aria-labelledby={`${tabId}-tab`}
    >
      {children}
    </div>
  ) : null;
};

export default TabPane;
