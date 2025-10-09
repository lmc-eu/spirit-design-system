'use client';

import React, { type ElementType, type ForwardedRef, forwardRef } from 'react';
import { SizesExtended } from '../../constants';
import { useStyleProps } from '../../hooks';
import { type SpiritAvatarProps } from '../../types';
import { mergeStyleProps } from '../../utils';
import { useAvatarStyleProps } from './useAvatarStyleProps';

const defaultProps: Partial<SpiritAvatarProps> = {
  elementType: 'div',
  isSquare: false,
  size: SizesExtended.MEDIUM,
};

/* We need an exception for components exported with forwardRef */
/* eslint no-underscore-dangle: ['error', { allow: ['_Avatar'] }] */
const _Avatar = <T extends ElementType = 'div', S = void>(
  props: SpiritAvatarProps<T, S>,
  ref: ForwardedRef<HTMLDivElement>,
) => {
  const propsWithDefaults = { ...defaultProps, ...props };
  const { elementType: ElementTag = 'div', children, ...restProps } = propsWithDefaults;
  const { classProps, props: modifiedProps } = useAvatarStyleProps(restProps);
  const { styleProps, props: otherProps } = useStyleProps(modifiedProps);
  const mergedStyleProps = mergeStyleProps(ElementTag, { classProps, styleProps });

  return (
    <ElementTag {...otherProps} {...mergedStyleProps} ref={ref}>
      {children}
    </ElementTag>
  );
};

const Avatar = forwardRef<HTMLDivElement, SpiritAvatarProps<ElementType>>(_Avatar);

export default Avatar;
