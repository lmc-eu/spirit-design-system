'use client';

import classNames from 'classnames';
import React, { ElementType, forwardRef, ReactElement } from 'react';
import { useStyleProps } from '../../hooks';
import { PolymorphicRef, SpiritHeaderLogoProps } from '../../types';
import { useUnstableHeaderStyleProps } from './useUnstableHeaderStyleProps';

const defaultProps: Partial<SpiritHeaderLogoProps> = {
  elementType: 'a',
};

/* We need an exception for components exported with forwardRef */
/* eslint no-underscore-dangle: ['error', { allow: ['_HeaderLogo'] }] */
const _HeaderLogo = <E extends ElementType = 'a'>(
  props: SpiritHeaderLogoProps<E>,
  ref: PolymorphicRef<E>,
): ReactElement => {
  const propsWithDefaults = { ...defaultProps, ...props };
  const {
    elementType: ElementTag = defaultProps.elementType as ElementType,
    children,
    ...restProps
  } = propsWithDefaults;
  const { classProps, props: modifiedProps } = useUnstableHeaderStyleProps(restProps);
  const { styleProps, props: otherProps } = useStyleProps(modifiedProps);

  return (
    <ElementTag
      {...otherProps}
      {...styleProps}
      href={restProps.href}
      className={classNames(classProps.logo, styleProps.className)}
      ref={ref}
    >
      {children}
    </ElementTag>
  );
};

const UNSTABLE_HeaderLogo = forwardRef<HTMLAnchorElement, SpiritHeaderLogoProps<ElementType>>(_HeaderLogo);

export default UNSTABLE_HeaderLogo;
