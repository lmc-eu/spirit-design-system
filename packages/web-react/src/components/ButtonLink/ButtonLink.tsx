'use client';

import classNames from 'classnames';
import React, { ElementType, ForwardedRef, forwardRef } from 'react';
import { useStyleProps } from '../../hooks';
import { SpiritButtonLinkProps } from '../../types';
import { Spinner } from '../Spinner';
import { useButtonLinkAriaProps } from './useButtonLinkAriaProps';
import { useButtonLinkStyleProps } from './useButtonLinkStyleProps';

const defaultProps: Partial<SpiritButtonLinkProps> = {
  color: 'primary',
  elementType: 'a',
  isBlock: false,
  isDisabled: false,
  isLoading: false,
  isSquare: false,
  size: 'medium',
};

/* We need an exception for components exported with forwardRef */
/* eslint no-underscore-dangle: ['error', { allow: ['_ButtonLink'] }] */
const _ButtonLink = <T extends ElementType = 'a', C = void, S = void>(
  props: SpiritButtonLinkProps<T, C, S>,
  ref: ForwardedRef<HTMLAnchorElement>,
) => {
  const propsWithDefaults = { ...defaultProps, ...props };
  const {
    elementType: ElementTag = defaultProps.elementType as ElementType,
    children,
    ...restProps
  } = propsWithDefaults;

  const { buttonLinkProps } = useButtonLinkAriaProps(restProps);
  const { classProps, props: modifiedProps } = useButtonLinkStyleProps(restProps);
  const { styleProps, props: otherProps } = useStyleProps(modifiedProps);

  return (
    <ElementTag
      {...otherProps}
      {...buttonLinkProps}
      ref={ref}
      className={classNames(classProps, styleProps.className)}
      style={styleProps.style}
    >
      {children}
      {restProps.isLoading && <Spinner />}
    </ElementTag>
  );
};

export const ButtonLink = forwardRef<HTMLAnchorElement, SpiritButtonLinkProps<ElementType>>(_ButtonLink);

export default ButtonLink;
