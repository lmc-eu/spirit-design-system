'use client';

import classNames from 'classnames';
import React from 'react';
import { useStyleProps } from '../../hooks';
import { SpiritNavigationProps } from '../../types';
import { useNavigationStyleProps } from './useNavigationStyleProps';

const Navigation = (props: SpiritNavigationProps): JSX.Element => {
  const { children, ...restProps } = props;

  const { classProps, props: modifiedProps } = useNavigationStyleProps(restProps);
  const { styleProps, props: otherProps } = useStyleProps(modifiedProps);

  return (
    <nav {...otherProps} className={classNames(classProps, styleProps.className)} style={styleProps.style}>
      <ul>{children}</ul>
    </nav>
  );
};

export default Navigation;
