'use client';

import React, { ElementType, forwardRef } from 'react';
import { useStyleProps } from '../../hooks';
import { PolymorphicRef, SpiritDialogHeaderLinkProps } from '../../types';
import { mergeStyleProps } from '../../utils';
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
  const mergedStyleProps = mergeStyleProps(ElementTag, {
    classProps: classProps.headerDialogLink,
    styleProps,
    otherProps,
  });

  return (
    <ElementTag {...otherProps} {...mergedStyleProps} ref={ref}>
      {children}
    </ElementTag>
  );
};

const HeaderDialogLink = forwardRef<HTMLAnchorElement, SpiritDialogHeaderLinkProps<ElementType>>(_HeaderDialogLink);

HeaderDialogLink.spiritComponent = 'HeaderDialogLink';

export default HeaderDialogLink;
