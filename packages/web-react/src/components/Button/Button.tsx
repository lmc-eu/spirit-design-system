'use client';

import React, { ElementType, ForwardedRef, forwardRef } from 'react';
import { usePropsContext } from '../../context';
import { useStyleProps } from '../../hooks';
import { SpiritButtonProps } from '../../types';
import { mergeStyleProps } from '../../utils';
import { Spinner } from '../Spinner';
import { useButtonProps } from './useButtonProps';
import { useButtonStyleProps } from './useButtonStyleProps';

const defaultProps: Partial<SpiritButtonProps> = {
  color: 'primary',
  isBlock: false,
  isDisabled: false,
  isLoading: false,
  isSymmetrical: false,
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
  const propsWithContext = usePropsContext();
  const propsWithDefaults = { ...defaultProps, ...props, ...propsWithContext };
  const {
    elementType: ElementTag = defaultProps.elementType as ElementType,
    children,
    ...restProps
  } = propsWithDefaults;

  const { buttonProps } = useButtonProps(restProps);
  const { classProps, props: modifiedProps } = useButtonStyleProps(restProps);
  const { styleProps, props: otherProps } = useStyleProps(modifiedProps);
  const mergedStyleProps = mergeStyleProps(ElementTag, { classProps, styleProps, otherProps });

  return (
    <ElementTag {...otherProps} {...buttonProps} ref={ref} {...mergedStyleProps}>
      {children}
      {restProps.isLoading && <Spinner />}
    </ElementTag>
  );
};

const Button = forwardRef<HTMLButtonElement, SpiritButtonProps<ElementType>>(_Button);

Button.spiritComponent = 'Button';

export default Button;
