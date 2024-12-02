'use client';

import classNames from 'classnames';
import React, { ElementType, forwardRef } from 'react';
import { useStyleProps } from '../../hooks';
import { PolymorphicRef, SpiritNavigationLinkProps } from '../../types';
import { useNavigationLinkStyleProps } from './useNavigationLinkStyleProps';

const defaultProps: Partial<SpiritNavigationLinkProps> = {
  elementType: 'a',
};

/* We need an exception for components exported with forwardRef */
/* eslint no-underscore-dangle: ['error', { allow: ['_NavigationLink'] }] */
const _NavigationLink = <E extends ElementType = 'a'>(
  props: SpiritNavigationLinkProps<E>,
  ref: PolymorphicRef<E>,
): JSX.Element => {
  const propsWithDefaults = { ...defaultProps, ...props };
  const {
    elementType: ElementTag = defaultProps.elementType as ElementType,
    children,
    ...restProps
  } = propsWithDefaults;
  const { classProps, props: modifiedProps } = useNavigationLinkStyleProps(restProps);
  const { styleProps, props: otherProps } = useStyleProps(modifiedProps);

  return (
    <ElementTag
      {...otherProps}
      {...styleProps}
      href={restProps.href}
      className={classNames(classProps, styleProps.className)}
      ref={ref}
    >
      {children}
    </ElementTag>
  );
};

const NavigationLink = forwardRef<HTMLAnchorElement, SpiritNavigationLinkProps<ElementType>>(_NavigationLink);

export default NavigationLink;
