import React from 'react';
import { ChildrenProps, TabId, TransferProps, ClickEvents, ClickEvent } from '../../types';
import { useTabContext } from './TabContext';
import { useTabsStyleProps } from './useTabsStyleProps';

export interface TabItemProps extends ChildrenProps, TransferProps, ClickEvents {
  forTab: TabId;
}

const TabItem = ({ children, forTab, onClick, ...restProps }: TabItemProps): JSX.Element => {
  const { selectTab, selectedTabId, onSelectionChange } = useTabContext();
  const { classProps } = useTabsStyleProps({ forTab, selectedTabId });

  const handleClick = (event: ClickEvent) => {
    selectTab(forTab);

    if (onClick) {
      onClick(event);
    }

    if (onSelectionChange) {
      onSelectionChange(selectedTabId);
    }
  };

  return (
    <li className={classProps.item}>
      <button
        {...restProps}
        type="button"
        className={classProps.link}
        role="tab"
        aria-selected={selectedTabId === forTab}
        id={`${forTab}-tab`}
        aria-controls={forTab.toString()}
        onClick={handleClick}
      >
        {children}
      </button>
    </li>
  );
};

export default TabItem;
