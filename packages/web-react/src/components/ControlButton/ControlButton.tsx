'use client';

import React, { type ElementType, type ForwardedRef, forwardRef } from 'react';
import { usePropsContext } from '../../context';
import { useStyleProps } from '../../hooks';
import { type SpiritControlButtonProps } from '../../types';
import { mergeStyleProps } from '../../utils';
import { useControlButtonProps } from './useControlButtonProps';
import { useControlButtonStyleProps } from './useControlButtonStyleProps';

const defaultProps: Partial<SpiritControlButtonProps> = {
  isDisabled: false,
  isSubtle: false,
  isSymmetrical: false,
  size: 'medium',
  type: 'button',
  elementType: 'button',
};

/* We need an exception for components exported with forwardRef */
/* eslint no-underscore-dangle: ['error', { allow: ['_ControlButton'] }] */
const _ControlButton = <T extends ElementType = 'button', S = void>(
  props: SpiritControlButtonProps<T, S>,
  ref: ForwardedRef<HTMLButtonElement>,
) => {
  const propsWithContext = usePropsContext();
  const propsWithDefaults = { ...defaultProps, ...props, ...propsWithContext };
  const {
    elementType: ElementTag = defaultProps.elementType as ElementType,
    children,
    ...restProps
  } = propsWithDefaults;

  const { controlButtonProps } = useControlButtonProps(restProps);
  const { classProps, props: modifiedProps } = useControlButtonStyleProps(restProps);
  const { styleProps, props: otherProps } = useStyleProps(modifiedProps);
  const mergedStyleProps = mergeStyleProps(ElementTag, { classProps, styleProps, otherProps });

  return (
    <ElementTag {...otherProps} {...controlButtonProps} ref={ref} {...mergedStyleProps}>
      {children}
    </ElementTag>
  );
};

const ControlButton = forwardRef<HTMLButtonElement, SpiritControlButtonProps<ElementType>>(_ControlButton);

ControlButton.spiritComponent = 'ControlButton';

export default ControlButton;
