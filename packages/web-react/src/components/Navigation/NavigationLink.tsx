'use client';

import classNames from 'classnames';
import React, { ElementType, forwardRef } from 'react';
import { useStyleProps } from '../../hooks';
import { PolymorphicRef, SpiritNavigationLinkProps } from '../../types';
import { useNavigationLinkProps } from './useNavigationLinkProps';
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
  const { elementType = defaultProps.elementType as ElementType, children, ...restProps } = propsWithDefaults;
  const ElementTag = propsWithDefaults.isDisabled ? 'span' : elementType;

  const { navigationLinkProps } = useNavigationLinkProps(propsWithDefaults);
  const { classProps, props: modifiedProps } = useNavigationLinkStyleProps(restProps);
  const { styleProps, props: otherProps } = useStyleProps(modifiedProps);

  return (
    <ElementTag
      {...otherProps}
      {...styleProps}
      {...navigationLinkProps}
      className={classNames(classProps, styleProps.className)}
      ref={ref}
    >
      {children}
    </ElementTag>
  );
};

const NavigationLink = forwardRef<HTMLElement, SpiritNavigationLinkProps<ElementType>>(_NavigationLink);

export default NavigationLink;
