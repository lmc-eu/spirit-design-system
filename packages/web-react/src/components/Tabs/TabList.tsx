import classNames from 'classnames';
import React, { ReactElement } from 'react';
import { useStyleProps } from '../../hooks';
import { TabListProps } from '../../types';
import { useTabsStyleProps } from './useTabsStyleProps';

const TabList = ({ children, ...restProps }: TabListProps): ReactElement => {
  const { classProps, styleProps: tabsStyle } = useTabsStyleProps();
  const { styleProps, props: transferProps } = useStyleProps(restProps);

  const tabsStyleProps = {
    style: {
      ...styleProps.style,
      ...tabsStyle,
    },
  };

  return (
    <ul
      {...transferProps}
      {...styleProps}
      {...tabsStyleProps}
      className={classNames(classProps.root, styleProps.className)}
      role="tablist"
    >
      {children}
    </ul>
  );
};

export default TabList;
