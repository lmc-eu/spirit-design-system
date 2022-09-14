import React from 'react';
import { ChildrenProps, TabId, RestProps } from '../../types';
import { useTabContext } from './TabContext';
import { useTabsStyleProps } from './useTabsStyleProps';

interface TabItemProps extends ChildrenProps, RestProps {
  forTab: TabId;
}

const TabItem = ({ children, forTab }: TabItemProps): JSX.Element => {
  const { selectTab, selectedTabId } = useTabContext();
  const { classProps } = useTabsStyleProps({ forTab, selectedTabId });

  return (
    <li className={classProps.item}>
      <button
        type="button"
        className={classProps.link}
        role="tab"
        aria-selected={selectedTabId === forTab}
        id={`${forTab}-tab`}
        aria-controls={forTab.toString()}
        onClick={() => selectTab(forTab)}
      >
        {children}
      </button>
    </li>
  );
};

export default TabItem;
