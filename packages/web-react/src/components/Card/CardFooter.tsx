'use client';

import classNames from 'classnames';
import React from 'react';
import { AlignmentX } from '../../constants';
import { useStyleProps } from '../../hooks';
import { SpiritCardFooterProps } from '../../types';
import { useCardStyleProps } from './useCardStyleProps';

const defaultProps: Partial<SpiritCardFooterProps> = {
  alignmentX: AlignmentX.LEFT,
};

const CardFooter = (props: SpiritCardFooterProps) => {
  const propsWithDefaults = { ...defaultProps, ...props };
  const { children, alignmentX, ...restProps } = propsWithDefaults;
  const { classProps } = useCardStyleProps({ footerAlignmentX: alignmentX });
  const { styleProps, props: otherProps } = useStyleProps(restProps);

  return (
    <footer {...otherProps} className={classNames(classProps.footer, styleProps.className)} style={styleProps.style}>
      {children}
    </footer>
  );
};

export default CardFooter;
