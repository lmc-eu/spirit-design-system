import classNames from 'classnames';
import React from 'react';
import { useStyleProps } from '../../hooks';
import { HeaderDialogNavItemProps } from '../../types';
import { useHeaderStyleProps } from './useHeaderStyleProps';

const HeaderDialogNavItem = (props: HeaderDialogNavItemProps) => {
  const { classProps } = useHeaderStyleProps();
  const { styleProps, props: otherProps } = useStyleProps(props);

  return (
    <li
      {...otherProps}
      className={classNames(classProps.headerDialogNavItem, styleProps.className)}
      style={styleProps.style}
    />
  );
};

export default HeaderDialogNavItem;
