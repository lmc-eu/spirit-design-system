'use client';

import classNames from 'classnames';
import React, { ElementType, ForwardedRef, forwardRef } from 'react';
import { useStyleProps } from '../../hooks';
import { SpiritButtonProps } from '../../types';
import { Spinner } from '../Spinner';
import { useButtonAriaProps } from './useButtonAriaProps';
import { useButtonStyleProps } from './useButtonStyleProps';

const defaultProps: Partial<SpiritButtonProps> = {
  color: 'primary',
  isBlock: false,
  isDisabled: false,
  isLoading: false,
  isSquare: false,
  size: 'medium',
  type: 'button',
  elementType: 'button',
};

/* We need an exception for components exported with forwardRef */
/* eslint no-underscore-dangle: ['error', { allow: ['_Button'] }] */
const _Button = <T extends ElementType = 'button', C = void, S = void>(
  props: SpiritButtonProps<T, C, S>,
  ref: ForwardedRef<HTMLButtonElement>,
) => {
  const propsWithDefaults = { ...defaultProps, ...props };
  const {
    elementType: ElementTag = defaultProps.elementType as ElementType,
    children,
    ...restProps
  } = propsWithDefaults;

  const { buttonProps } = useButtonAriaProps(restProps);
  const { classProps, props: modifiedProps } = useButtonStyleProps(restProps);
  const { styleProps, props: otherProps } = useStyleProps(modifiedProps);

  return (
    <ElementTag
      {...otherProps}
      {...buttonProps}
      ref={ref}
      className={classNames(classProps, styleProps.className)}
      style={styleProps.style}
    >
      {children}
      {restProps.isLoading && <Spinner />}
    </ElementTag>
  );
};

export const Button = forwardRef<HTMLButtonElement, SpiritButtonProps<ElementType>>(_Button);

export default Button;
