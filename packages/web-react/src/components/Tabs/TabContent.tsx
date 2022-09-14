import React from 'react';
import { ChildrenProps, RestProps } from '../../types';
import { useTabsStyleProps } from './useTabsStyleProps';

type TabContentProps = ChildrenProps & RestProps;

const TabContent = ({ children }: TabContentProps): JSX.Element => {
  const { classProps } = useTabsStyleProps();

  return <div className={classProps.content}>{children}</div>;
};

export default TabContent;
