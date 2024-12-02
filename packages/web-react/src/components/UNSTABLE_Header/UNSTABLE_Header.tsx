'use client';

import classNames from 'classnames';
import React from 'react';
import { useStyleProps } from '../../hooks';
import { SpiritHeaderProps } from '../../types';
import { useUnstableHeaderStyleProps } from './useUnstableHeaderStyleProps';

const UNSTABLE_Header = (props: SpiritHeaderProps): JSX.Element => {
  const { children, ...restProps } = props;

  const { classProps, props: modifiedProps } = useUnstableHeaderStyleProps(restProps);
  const { styleProps, props: otherProps } = useStyleProps(modifiedProps);

  return (
    <header {...otherProps} className={classNames(classProps.root, styleProps.className)} style={styleProps.style}>
      {children}
    </header>
  );
};

export default UNSTABLE_Header;
