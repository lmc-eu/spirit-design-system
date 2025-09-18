'use client';

import React, { type ElementType, forwardRef } from 'react';
import { useStyleProps } from '../../hooks';
import { type PolymorphicRef, type SpiritSkipLinkProps } from '../../types';
import { mergeStyleProps } from '../../utils';
import { useSkipLinkStyleProps } from './useSkipLinkStyleProps';

const defaultProps: Partial<SpiritSkipLinkProps> = {
  elementType: 'a',
};

/* We need an exception for components exported with forwardRef */
/* eslint no-underscore-dangle: ['error', { allow: ['_SkipLink'] }] */
const _SkipLink = <E extends ElementType = 'a'>(props: SpiritSkipLinkProps<E>, ref: PolymorphicRef<E>): JSX.Element => {
  const propsWithDefaults = { ...defaultProps, ...props };
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const {
    elementType: ElementTag = defaultProps.elementType as ElementType,
    children,
    ...restProps
  } = propsWithDefaults;
  const { classProps, props: modifiedProps } = useSkipLinkStyleProps(restProps);
  const { styleProps, props: otherProps } = useStyleProps(modifiedProps);
  const mergedStyleProps = mergeStyleProps('a', { classProps, styleProps, otherProps });

  return (
    <ElementTag {...otherProps} {...mergedStyleProps} href={restProps.href} ref={ref}>
      {children}
    </ElementTag>
  );
};

const SkipLink = forwardRef<HTMLAnchorElement, SpiritSkipLinkProps<ElementType>>(_SkipLink);

SkipLink.spiritComponent = 'SkipLink';

export default SkipLink;
