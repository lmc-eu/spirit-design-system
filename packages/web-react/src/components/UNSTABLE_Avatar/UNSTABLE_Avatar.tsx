'use client';

import classNames from 'classnames';
import React, { ElementType, ForwardedRef, forwardRef } from 'react';
import { SizesExtended } from '../../constants';
import { useStyleProps } from '../../hooks';
import { SpiritAvatarProps } from '../../types';
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
  const {
    elementType: ElementTag = defaultProps.elementType as ElementType,
    children,
    ...restProps
  } = propsWithDefaults;
  const { classProps, props: modifiedProps } = useAvatarStyleProps(restProps);
  const { styleProps, props: otherProps } = useStyleProps(modifiedProps);

  return (
    <ElementTag {...otherProps} {...styleProps} ref={ref} className={classNames(classProps, styleProps.className)}>
      {children}
    </ElementTag>
  );
};

const UNSTABLE_Avatar = forwardRef<HTMLDivElement, SpiritAvatarProps<ElementType>>(_Avatar);

export default UNSTABLE_Avatar;
