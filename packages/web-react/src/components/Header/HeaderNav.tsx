import React from 'react';
import classNames from 'classnames';
import { useStyleProps } from '../../hooks';
import { HeaderNavProps } from '../../types';
import { useHeaderModernStyleProps } from './useHeaderStyleProps';

const HeaderNav = (props: HeaderNavProps) => {
  const { classProps } = useHeaderModernStyleProps();
  const { styleProps, props: otherProps } = useStyleProps(props);

  return (
    <ul {...otherProps} className={classNames(classProps.headerNav, styleProps.className)} style={styleProps.style} />
  );
};

export default HeaderNav;
