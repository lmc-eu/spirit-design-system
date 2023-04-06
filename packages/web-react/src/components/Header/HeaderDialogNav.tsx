import React from 'react';
import classNames from 'classnames';
import { useStyleProps } from '../../hooks';
import { HeaderDialogNavProps } from '../../types';
import { useHeaderModernStyleProps } from './useHeaderStyleProps';

const HeaderDialogNav = (props: HeaderDialogNavProps) => {
  const { classProps } = useHeaderModernStyleProps();
  const { styleProps, props: otherProps } = useStyleProps(props);

  return (
    <ul
      {...otherProps}
      className={classNames(classProps.headerDialogNav, styleProps.className)}
      style={styleProps.style}
    />
  );
};

export default HeaderDialogNav;
