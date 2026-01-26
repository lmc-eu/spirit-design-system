'use client';

import React, { forwardRef, type ElementType } from 'react';
import { useStyleProps } from '../../hooks';
import { type HiddenProps, type PolymorphicRef } from '../../types';
import { mergeStyleProps } from '../../utils';

const defaultProps = {
  elementType: 'span' as const,
};

/* We need an exception for components exported with forwardRef */
/* eslint no-underscore-dangle: ['error', { allow: ['HiddenInner'] }] */
const HiddenInner = <T extends ElementType = 'span'>(
  props: HiddenProps<T>,
  ref: PolymorphicRef<T>,
) => {
  const propsWithDefaults = { ...defaultProps, ...props };
  const { elementType = defaultProps.elementType, children, on, from, ...restProps } = propsWithDefaults;

  const Component = elementType as React.ElementType;

  const stylePropsWithMapping = {
    ...restProps,
    hideOn: on || restProps.hideOn,
    hideFrom: from || restProps.hideFrom,
  };

  const { styleProps, props: otherProps } = useStyleProps(stylePropsWithMapping);
  const mergedStyleProps = mergeStyleProps(Component, { styleProps });

  return (
    <Component {...otherProps} {...mergedStyleProps} ref={ref}>
      {children}
    </Component>
  );
};

const Hidden = forwardRef(HiddenInner) as <T extends ElementType = 'span'>(
  props: HiddenProps<T> & { ref?: PolymorphicRef<T> }
) => React.ReactElement;

Hidden.spiritComponent = 'Hidden';
Hidden.spiritDefaultElement = 'span' as const;
Hidden.spiritDefaultProps = null as unknown as HiddenProps<'span'>;
Hidden.displayName = 'Hidden';

export default Hidden;
