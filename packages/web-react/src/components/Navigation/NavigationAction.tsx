'use client';

import React, { ElementType, forwardRef, ReactElement } from 'react';
import { useStyleProps } from '../../hooks';
import { PolymorphicRef, SpiritNavigationActionProps } from '../../types';
import { mergeStyleProps } from '../../utils';
import { NavigationActionVariants } from './constants';
import { useNavigationActionProps } from './useNavigationActionProps';
import { useNavigationStyleProps } from './useNavigationStyleProps';

const defaultProps: Partial<SpiritNavigationActionProps> = {
  elementType: 'a',
  variant: NavigationActionVariants.BOX,
};

/* We need an exception for components exported with forwardRef */
/* eslint no-underscore-dangle: ['error', { allow: ['_NavigationAction'] }] */
const _NavigationAction = <E extends ElementType = 'a'>(
  props: SpiritNavigationActionProps<E>,
  ref: PolymorphicRef<E>,
): ReactElement => {
  const propsWithDefaults = { ...defaultProps, ...props };
  const { elementType = defaultProps.elementType as ElementType, children, ...restProps } = propsWithDefaults;
  const ElementTag = propsWithDefaults.isDisabled ? 'span' : elementType;

  const { navigationActionProps } = useNavigationActionProps(propsWithDefaults);
  const { classProps, props: modifiedProps } = useNavigationStyleProps(restProps);
  const { styleProps, props: otherProps } = useStyleProps(modifiedProps);
  const mergedStyleProps = mergeStyleProps(ElementTag, { classProps: classProps.action, styleProps, otherProps });

  return (
    <ElementTag {...otherProps} {...navigationActionProps} {...mergedStyleProps} ref={ref}>
      {children}
    </ElementTag>
  );
};

const NavigationAction = forwardRef<HTMLElement, SpiritNavigationActionProps<ElementType>>(_NavigationAction);

NavigationAction.spiritComponent = 'NavigationAction';

export default NavigationAction;
