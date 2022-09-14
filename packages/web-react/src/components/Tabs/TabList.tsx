import React from 'react';
import { ChildrenProps, RestProps } from '../../types';
import { useTabsStyleProps } from './useTabsStyleProps';

type TabListProps = ChildrenProps & RestProps;

const TabList = ({ children }: TabListProps): JSX.Element => {
  const { classProps } = useTabsStyleProps();

  return (
    <ul className={classProps.root} role="tablist">
      {children}
    </ul>
  );
};

export default TabList;
