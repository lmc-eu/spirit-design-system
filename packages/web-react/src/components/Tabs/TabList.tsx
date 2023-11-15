import React from 'react';
import classNames from 'classnames';
import { useStyleProps } from '../../hooks';
import { ChildrenProps, TransferProps } from '../../types';
import { useTabsStyleProps } from './useTabsStyleProps';

export type TabListProps = ChildrenProps & TransferProps;

const TabList = ({ children, ...restProps }: TabListProps): JSX.Element => {
  const { classProps } = useTabsStyleProps();
  const { styleProps, props: transferProps } = useStyleProps(restProps);

  return (
    <ul {...transferProps} {...styleProps} className={classNames(classProps.root, styleProps.className)} role="tablist">
      {children}
    </ul>
  );
};

export default TabList;
