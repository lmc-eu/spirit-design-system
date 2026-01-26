'use client';

import React, { forwardRef, type ElementType } from 'react';
import { useStyleProps } from '../../hooks';
import { type HeaderDialogLinkProps, type PolymorphicRef } from '../../types';
import { mergeStyleProps } from '../../utils';
import { useHeaderStyleProps } from './useHeaderStyleProps';

/* We need an exception for components exported with forwardRef */
/* eslint no-underscore-dangle: ['error', { allow: ['HeaderDialogLinkInner'] }] */
const HeaderDialogLinkInner = <E extends ElementType = 'a'>(
  props: HeaderDialogLinkProps<E>,
  ref: PolymorphicRef<E>,
): JSX.Element => {
  const { elementType = 'a', children, isCurrent, ...restProps } = props;

  const Component = elementType as React.ElementType;

  const { classProps } = useHeaderStyleProps({ isCurrentLink: isCurrent });
  const { styleProps, props: otherProps } = useStyleProps(restProps);
  const mergedStyleProps = mergeStyleProps(Component, {
    classProps: classProps.headerDialogLink,
    styleProps,
    otherProps,
  });

  return (
    <Component {...otherProps} {...mergedStyleProps} ref={ref}>
      {children}
    </Component>
  );
};

const HeaderDialogLink = forwardRef(HeaderDialogLinkInner) as <E extends ElementType = 'a'>(
  props: HeaderDialogLinkProps<E> & { ref?: PolymorphicRef<E> }
) => React.ReactElement;

HeaderDialogLink.spiritComponent = 'HeaderDialogLink';
HeaderDialogLink.displayName = 'HeaderDialogLink';

export default HeaderDialogLink;
