import classNames from 'classnames';
import React from 'react';
import { useStyleProps } from '../../hooks';
import { HeaderNavProps } from '../../types';
import { useHeaderStyleProps } from './useHeaderStyleProps';

const HeaderNav = (props: HeaderNavProps) => {
  const { classProps } = useHeaderStyleProps();
  const { styleProps, props: otherProps } = useStyleProps(props);

  return (
    <ul {...otherProps} className={classNames(classProps.headerNav, styleProps.className)} style={styleProps.style} />
  );
};

export default HeaderNav;
