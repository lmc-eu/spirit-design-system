'use client';

import classNames from 'classnames';
import React, { ElementType, forwardRef } from 'react';
import { useStyleProps } from '../../hooks';
import { PolymorphicForwardRef, PolymorphicRef, SpiritHeaderLinkProps } from '../../types';
import { useHeaderStyleProps } from './useHeaderStyleProps';

/* We need an exception for components exported with forwardRef */
/* eslint no-underscore-dangle: ['error', { allow: ['_HeaderLink'] }] */
const _HeaderLink = <E extends ElementType = 'a'>(
  props: SpiritHeaderLinkProps<E>,
  ref: PolymorphicRef<E>,
): JSX.Element => {
  const { elementType: ElementTag = 'a' as ElementType, children, isCurrent, ...restProps } = props;
  const { classProps } = useHeaderStyleProps({ isCurrentLink: isCurrent });
  const { styleProps, props: otherProps } = useStyleProps(restProps);

  return (
    <ElementTag
      {...otherProps}
      className={classNames(classProps.headerLink, styleProps.className)}
      href={restProps.href}
      style={styleProps.style}
      ref={ref}
    >
      {children}
    </ElementTag>
  );
};

const HeaderLink = (forwardRef as PolymorphicForwardRef)(_HeaderLink);

export default HeaderLink;
