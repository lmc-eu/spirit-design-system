import React from 'react';
import { ChildrenProps, TransferProps } from '../../types';
import { useTabsStyleProps } from './useTabsStyleProps';

export type TabListProps = ChildrenProps & TransferProps;

const TabList = ({ children, ...restProps }: TabListProps): JSX.Element => {
  const { classProps } = useTabsStyleProps();

  return (
    <ul {...restProps} className={classProps.root} role="tablist">
      {children}
    </ul>
  );
};

export default TabList;
