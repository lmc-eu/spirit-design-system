import classNames from 'classnames';
import React from 'react';
import { useStyleProps } from '../../hooks';
import { TabListProps } from '../../types';
import { useTabsStyleProps } from './useTabsStyleProps';

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
