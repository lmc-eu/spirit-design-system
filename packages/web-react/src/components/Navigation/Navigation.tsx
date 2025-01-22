'use client';

import classNames from 'classnames';
import React from 'react';
import { Direction } from '../../constants';
import { useStyleProps } from '../../hooks';
import { SpiritNavigationProps } from '../../types';
import { useNavigationStyleProps } from './useNavigationStyleProps';

const defaultProps: Partial<SpiritNavigationProps> = {
  direction: Direction.HORIZONTAL,
};

const Navigation = (props: SpiritNavigationProps): JSX.Element => {
  const propsWithDefaults = { ...defaultProps, ...props };
  const { children, ...restProps } = propsWithDefaults;

  const { classProps, props: modifiedProps } = useNavigationStyleProps(restProps);
  const { styleProps, props: otherProps } = useStyleProps(modifiedProps);

  return (
    <nav {...otherProps} className={classNames(classProps.root, styleProps.className)} style={styleProps.style}>
      <ul>{children}</ul>
    </nav>
  );
};

export default Navigation;
