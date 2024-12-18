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

  const { classProps, props: modifiedProps, styleProps: boxStyle } = useBoxStyleProps(restProps);
  const { styleProps, props: otherProps } = useStyleProps(modifiedProps);

  const boxStyleProps = {
    style: {
      ...styleProps.style,
      ...boxStyle,
    },
  };

  return (
    <ElementTag {...otherProps} {...boxStyleProps} className={classNames(classProps, styleProps.className)}>
      {children}
    </ElementTag>
  );
};

export default Box;
