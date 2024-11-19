'use client';

import classNames from 'classnames';
import React, { ElementType, forwardRef } from 'react';
import { useStyleProps } from '../../hooks';
import { PolymorphicRef, SpiritCardLinkProps, SpiritLinkProps } from '../../types';
import { useCardStyleProps } from './useCardStyleProps';

const defaultProps: Partial<SpiritCardLinkProps> = {
  elementType: 'a',
};

/* We need an exception for components exported with forwardRef */
/* eslint no-underscore-dangle: ['error', { allow: ['_CardLink'] }] */
const _CardLink = <E extends ElementType = 'a'>(props: SpiritCardLinkProps<E>, ref: PolymorphicRef<E>): JSX.Element => {
  const propsWithDefaults = { ...defaultProps, ...props };
  const {
    elementType: ElementTag = defaultProps.elementType as ElementType,
    children,
    ...restProps
  } = propsWithDefaults;
  const { classProps } = useCardStyleProps();
  const { styleProps, props: otherProps } = useStyleProps(restProps);

  return (
    <ElementTag
      {...otherProps}
      {...styleProps}
      href={restProps.href}
      className={classNames(classProps.link, styleProps.className)}
      ref={ref}
    >
      {children}
    </ElementTag>
  );
};

const CardLink = forwardRef<HTMLAnchorElement, SpiritLinkProps<ElementType>>(_CardLink);

export default CardLink;
