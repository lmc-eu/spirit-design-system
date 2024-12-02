'use client';

import classNames from 'classnames';
import React from 'react';
import { useStyleProps } from '../../hooks';
import { SpiritHeaderProps } from '../../types/unstableHeader';
import { useHeaderStyleProps } from './useHeaderStyleProps';

const defaultProps: Partial<SpiritHeaderProps> = {
  isFluid: false,
  isSimple: false,
};

const UNSTABLE_Header = (props: SpiritHeaderProps): JSX.Element => {
  const propsWithDefaults = { ...defaultProps, ...props };
  const { children, ...restProps } = propsWithDefaults;

  const { classProps, props: modifiedProps } = useHeaderStyleProps(restProps);
  const { styleProps, props: otherProps } = useStyleProps(modifiedProps);

  return (
    <header {...otherProps} className={classNames(classProps.root, styleProps.className)} style={styleProps.style}>
      {children}
    </header>
  );
};

export default UNSTABLE_Header;
