'use client';

import classNames from 'classnames';
import React, { ElementType, forwardRef } from 'react';
import { useStyleProps } from '../../hooks';
import { PolymorphicRef, SpiritNavigationActionProps } from '../../types';
import { useNavigationActionProps } from './useNavigationActionProps';
import { useNavigationActionStyleProps } from './useNavigationActionStyleProps';

const defaultProps: Partial<SpiritNavigationActionProps> = {
  elementType: 'a',
};

/* We need an exception for components exported with forwardRef */
/* eslint no-underscore-dangle: ['error', { allow: ['_NavigationAction'] }] */
const _NavigationAction = <E extends ElementType = 'a'>(
  props: SpiritNavigationActionProps<E>,
  ref: PolymorphicRef<E>,
): JSX.Element => {
  const propsWithDefaults = { ...defaultProps, ...props };
  const { elementType = defaultProps.elementType as ElementType, children, ...restProps } = propsWithDefaults;
  const ElementTag = propsWithDefaults.isDisabled ? 'span' : elementType;

  const { navigationActionProps } = useNavigationActionProps(propsWithDefaults);
  const { classProps, props: modifiedProps } = useNavigationActionStyleProps(restProps);
  const { styleProps, props: otherProps } = useStyleProps(modifiedProps);

  return (
    <ElementTag
      {...otherProps}
      {...styleProps}
      {...navigationActionProps}
      className={classNames(classProps, styleProps.className)}
      ref={ref}
    >
      {children}
    </ElementTag>
  );
};

const NavigationAction = forwardRef<HTMLElement, SpiritNavigationActionProps<ElementType>>(_NavigationAction);

export default NavigationAction;
