'use client';

import classNames from 'classnames';
import React, { ElementType } from 'react';
import { BorderStyles, PaddingStyleProps } from '../../constants';
import { useStyleProps } from '../../hooks';
import { SpiritBoxProps } from '../../types';
import { useBoxStyleProps } from './useBoxStyleProps';

const defaultProps: Partial<SpiritBoxProps> = {
  elementType: 'div',
  borderStyle: BorderStyles.SOLID,
};

const Box = <T extends ElementType = 'div'>(props: SpiritBoxProps<T>) => {
  const propsWithDefaults = { ...defaultProps, ...props };
  const { elementType: ElementTag = 'div', children, ...restProps } = propsWithDefaults;

  const { classProps, props: modifiedProps } = useBoxStyleProps(restProps);
  const { styleProps, props: otherProps } = useStyleProps(modifiedProps, PaddingStyleProps);

  return (
    <ElementTag {...otherProps} {...styleProps} className={classNames(classProps, styleProps.className)}>
      {children}
    </ElementTag>
  );
};

export default Box;
