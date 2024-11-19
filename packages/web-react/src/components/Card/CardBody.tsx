'use client';

import classNames from 'classnames';
import React from 'react';
import { useStyleProps } from '../../hooks';
import { SpiritCardBodyProps } from '../../types';
import { useCardStyleProps } from './useCardStyleProps';

const defaultProps: Partial<SpiritCardBodyProps> = {
  isSelectable: false,
};

const CardBody = (props: SpiritCardBodyProps) => {
  const propsWithDefaults = { ...defaultProps, ...props };
  const { children, isSelectable, ...restProps } = propsWithDefaults;
  const { classProps } = useCardStyleProps({ isSelectable });
  const { styleProps, props: otherProps } = useStyleProps(restProps);

  return (
    <div {...otherProps} className={classNames(classProps.body, styleProps.className)} style={styleProps.style}>
      {children}
    </div>
  );
};

export default CardBody;
