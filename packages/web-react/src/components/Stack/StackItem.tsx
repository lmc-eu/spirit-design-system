'use client';

import React, { forwardRef, type ElementType } from 'react';
import { useStyleProps } from '../../hooks';
import { type PolymorphicRef, type StackItemProps } from '../../types';
import { mergeStyleProps } from '../../utils';
import { useStackStyleProps } from './useStackStyleProps';

const defaultProps = {
  elementType: 'div' as const,
};

/* We need an exception for components exported with forwardRef */
/* eslint no-underscore-dangle: ['error', { allow: ['StackItemInner'] }] */
const StackItemInner = <T extends ElementType = 'div'>(
  props: StackItemProps<T>,
  ref: PolymorphicRef<T>,
): JSX.Element => {
  const { elementType = defaultProps.elementType, children, ...restProps } = props;

  const Component = elementType as React.ElementType;

  const { classProps, props: modifiedProps } = useStackStyleProps(restProps);
  const { styleProps, props: otherProps } = useStyleProps(modifiedProps);
  const mergedStyleProps = mergeStyleProps(Component, {
    classProps: classProps.item,
    styleProps,
    otherProps,
  });

  return (
    <Component {...otherProps} {...mergedStyleProps} ref={ref}>
      {children}
    </Component>
  );
};

const StackItem = forwardRef(StackItemInner) as <T extends ElementType = 'div'>(
  props: StackItemProps<T> & { ref?: PolymorphicRef<T> }
) => React.ReactElement;

StackItem.spiritComponent = 'StackItem';
StackItem.displayName = 'StackItem';

export default StackItem;
