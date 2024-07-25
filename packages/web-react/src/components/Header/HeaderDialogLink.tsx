'use client';

import classNames from 'classnames';
import React, { ElementType, forwardRef } from 'react';
import { useStyleProps } from '../../hooks';
import { PolymorphicRef, SpiritDialogHeaderLinkProps } from '../../types';
import { useHeaderStyleProps } from './useHeaderStyleProps';

/* We need an exception for components exported with forwardRef */
/* eslint no-underscore-dangle: ['error', { allow: ['_HeaderDialogLink'] }] */
const _HeaderDialogLink = <E extends ElementType = 'a'>(
  props: SpiritDialogHeaderLinkProps<E>,
  ref: PolymorphicRef<E>,
): JSX.Element => {
  const { elementType: ElementTag = 'a', children, isCurrent, ...restProps } = props;
  const { classProps } = useHeaderStyleProps({ isCurrentLink: isCurrent });
  const { styleProps, props: otherProps } = useStyleProps(restProps);

  return (
    <ElementTag
      {...otherProps}
      className={classNames(classProps.headerDialogLink, styleProps.className)}
      style={styleProps.style}
      ref={ref}
    >
      {children}
    </ElementTag>
  );
};

export const HeaderDialogLink = forwardRef<HTMLAnchorElement, SpiritDialogHeaderLinkProps<ElementType>>(
  _HeaderDialogLink,
);

export default HeaderDialogLink;
