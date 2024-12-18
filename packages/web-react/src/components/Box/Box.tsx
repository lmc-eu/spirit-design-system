'use client';

import classNames from 'classnames';
import React, { ElementType } from 'react';
import { useStyleProps } from '../../hooks';
import { SpiritBoxProps } from '../../types';
import { useBoxStyleProps } from './useBoxStyleProps';

const defaultProps: Partial<SpiritBoxProps> = {
  elementType: 'div',
};

const Box = <T extends ElementType = 'div'>(props: SpiritBoxProps<T>) => {
  const propsWithDefaults = { ...defaultProps, ...props };
  const { elementType: ElementTag = 'div', children, ...restProps } = propsWithDefaults;
  const { classProps } = useBoxStyleProps(restProps);
  const { styleProps, props: otherProps } = useStyleProps(restProps);

  return (
    <ElementTag {...otherProps} className={classNames(classProps, styleProps.className)} style={styleProps.style}>
      {children}
    </ElementTag>
  );
};

export default Box;
