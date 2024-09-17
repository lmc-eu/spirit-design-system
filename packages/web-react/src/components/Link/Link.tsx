'use client';

import classNames from 'classnames';
import React, { ElementType, forwardRef } from 'react';
import { useDeprecationMessage, useStyleProps } from '../../hooks';
import { PolymorphicRef, SpiritLinkProps } from '../../types';
import { useLinkStyleProps } from './useLinkStyleProps';

const defaultProps: Partial<SpiritLinkProps> = {
  elementType: 'a',
  color: 'primary',
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
    /** @deprecated "isUnderlined" property will be replaced in the next major version. Please use "underlined" instead. */
    isUnderlined,
    ...restProps
  } = propsWithDefaults;
  const { classProps, props: modifiedProps } = useLinkStyleProps({ isUnderlined, ...restProps });
  const { styleProps, props: otherProps } = useStyleProps(modifiedProps);

  useDeprecationMessage({
    method: 'property',
    trigger: !!isUnderlined,
    componentName: 'Link',
    propertyProps: {
      deprecatedName: 'isUnderlined',
      newName: 'underlined',
    },
  });

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

export const Link = forwardRef<HTMLAnchorElement, SpiritLinkProps<ElementType>>(_Link);

export default Link;
