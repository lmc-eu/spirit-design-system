'use client';

import classNames from 'classnames';
import React from 'react';
import { useStyleProps } from '../../hooks';
import { SpiritNavigationProps } from '../../types';
import { useNavigationStyleProps } from './useNavigationStyleProps';

const Navigation = (props: SpiritNavigationProps): JSX.Element => {
  const { children, ...restProps } = props;

  const { classProps } = useNavigationStyleProps();
  const { styleProps, props: otherProps } = useStyleProps(restProps);

  return (
    <nav {...otherProps} className={classNames(classProps, styleProps.className)} style={styleProps.style}>
      <ul>{children}</ul>
    </nav>
  );
};

export default Navigation;
