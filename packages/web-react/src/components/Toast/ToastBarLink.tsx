'use client';

import classNames from 'classnames';
import React, { ElementType, ForwardedRef, forwardRef } from 'react';
import { ActionLinkColors } from '../../constants';
import { useStyleProps } from '../../hooks';
import { SpiritLinkProps } from '../../types';
import { Link } from '../Link';
import { useToastBarStyleProps } from './useToastBarStyleProps';

const defaultProps: Partial<SpiritLinkProps> = {
  color: ActionLinkColors.INVERTED,
  isUnderlined: true,
};

/* We need an exception for components exported with forwardRef */
/* eslint no-underscore-dangle: ['error', { allow: ['_ToastBarLink'] }] */
const _ToastBarLink = <E extends ElementType = typeof Link, C = void>(
  props: SpiritLinkProps<E, C>,
  ref: ForwardedRef<HTMLAnchorElement>,
) => {
  const propsWithDefaults = { ...defaultProps, ...props };
  const { children, ...restProps } = propsWithDefaults;
  const { classProps, props: modifiedProps } = useToastBarStyleProps({ ...restProps });
  const { styleProps, props: otherProps } = useStyleProps(modifiedProps);

  return (
    <Link
      {...propsWithDefaults}
      {...otherProps}
      ref={ref}
      UNSAFE_className={classNames(classProps.link, styleProps.className)}
      UNSAFE_style={styleProps.style}
    >
      {children}
    </Link>
  );
};

export const ToastBarLink = forwardRef<HTMLAnchorElement, SpiritLinkProps<ElementType>>(_ToastBarLink);

export default ToastBarLink;
