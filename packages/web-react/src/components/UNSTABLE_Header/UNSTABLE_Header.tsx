'use client';

import classNames from 'classnames';
import React, { type ReactElement } from 'react';
import { useStyleProps } from '../../hooks';
import { type SpiritHeaderProps } from '../../types';
import { useUnstableHeaderStyleProps } from './useUnstableHeaderStyleProps';

const UNSTABLE_Header = (props: SpiritHeaderProps): ReactElement => {
  const { children, ...restProps } = props;

  const { classProps, props: modifiedProps } = useUnstableHeaderStyleProps(restProps);
  const { styleProps, props: otherProps } = useStyleProps(modifiedProps);

  return (
    <header {...otherProps} className={classNames(classProps.root, styleProps.className)} style={styleProps.style}>
      {children}
    </header>
  );
};

UNSTABLE_Header.spiritComponent = 'UNSTABLE_Header';

export default UNSTABLE_Header;
