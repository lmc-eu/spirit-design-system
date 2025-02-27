'use client';

import React, { ElementType, forwardRef } from 'react';
import { useStyleProps } from '../../hooks';
import { PolymorphicRef, SpiritLinkProps } from '../../types';
import { mergeStyleProps } from '../../utils';
import { useLinkStyleProps } from './useLinkStyleProps';

const defaultProps: Partial<SpiritLinkProps> = {
  elementType: 'a',
  color: 'primary',
  hasVisitedStyleAllowed: false,
  underlined: 'hover',
};

/* We need an exception for components exported with forwardRef */
/* eslint no-underscore-dangle: ['error', { allow: ['_Link'] }] */
const _Link = <E extends ElementType = 'a', T = void>(
  props: SpiritLinkProps<E, T>,
  ref: PolymorphicRef<E>,
): JSX.Element => {
  const propsWithDefaults = { ...defaultProps, ...props };
  const {
    elementType: ElementTag = defaultProps.elementType as ElementType,
    children,
    ...restProps
  } = propsWithDefaults;
  const { classProps, props: modifiedProps } = useLinkStyleProps(restProps);
  const { styleProps, props: otherProps } = useStyleProps(modifiedProps);
  const mergedStyleProps = mergeStyleProps(ElementTag, { classProps, styleProps, otherProps });

  return (
    <ElementTag {...otherProps} {...mergedStyleProps} href={restProps.href} ref={ref}>
      {children}
    </ElementTag>
  );
};

const Link = forwardRef<HTMLAnchorElement, SpiritLinkProps<ElementType>>(_Link);

Link.spiritComponent = 'Link';

export default Link;
