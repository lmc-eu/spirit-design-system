import React from 'react';
import { ChildrenProps } from '../../types';
import { useTabsStyleProps } from './useTabsStyleProps';

type TabListProps = ChildrenProps;

const TabList = ({ children }: TabListProps): JSX.Element => {
  const { classProps } = useTabsStyleProps();

  return (
    <ul className={classProps.root} role="tablist">
      {children}
    </ul>
  );
};

export default TabList;
