import React from 'react';
import classNames from 'classnames';
import { useStyleProps } from '../../hooks';
import { HeaderNavProps } from '../../types';
import { useHeaderModernStyleProps } from './useHeaderStyleProps';

const HeaderNav = (props: HeaderNavProps) => {
  const { ...restProps } = props;

  const { classProps } = useHeaderModernStyleProps();
  const { styleProps, props: otherProps } = useStyleProps(restProps);

  return (
    <ul className={classNames(classProps.headerNav, styleProps.className)} style={styleProps.style} {...otherProps} />
  );
};

export default HeaderNav;
