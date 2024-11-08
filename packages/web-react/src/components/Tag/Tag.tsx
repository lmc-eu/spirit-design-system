'use client';

import classNames from 'classnames';
import React, { ElementType, ForwardedRef, forwardRef } from 'react';
import { useStyleProps } from '../../hooks';
import { SpiritTagProps, StyleProps } from '../../types';
import { useTagStyleProps } from './useTagStyleProps';

const defaultProps: Partial<SpiritTagProps> = {
  color: 'neutral',
  elementType: 'span',
  isSubtle: false,
  size: 'medium',
};

/* We need an exception for components exported with forwardRef */
/* eslint no-underscore-dangle: ['error', { allow: ['_Tag'] }] */
const _Tag = <T extends ElementType = 'span', C = void, S = void>(
  props: SpiritTagProps<T, C, S>,
  ref: ForwardedRef<HTMLSpanElement>,
): JSX.Element => {
  const propsWithDefaults = { ...defaultProps, ...props };
  const {
    elementType: ElementTag = defaultProps.elementType as ElementType,
    children,
    ...restProps
  } = propsWithDefaults;
  const { classProps, props: modifiedProps } = useTagStyleProps(restProps);
  const { styleProps, props: otherProps } = useStyleProps(modifiedProps as StyleProps);

  return (
    <ElementTag {...otherProps} {...styleProps} className={classNames(classProps, styleProps.className)} ref={ref}>
      {children}
    </ElementTag>
  );
};

const Tag = forwardRef<HTMLSpanElement, SpiritTagProps<ElementType>>(_Tag);

export default Tag;
