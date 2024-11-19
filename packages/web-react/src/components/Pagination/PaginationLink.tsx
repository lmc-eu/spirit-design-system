'use client';

import classNames from 'classnames';
import React, { ElementType, forwardRef } from 'react';
import { useStyleProps } from '../../hooks';
import { PolymorphicRef, SpiritPaginationLinkProps } from '../../types';
import { VisuallyHidden } from '../VisuallyHidden';
import { usePaginationStyleProps } from './usePaginationStyleProps';

/* We need an exception for components exported with forwardRef */
/* eslint no-underscore-dangle: ['error', { allow: ['_PaginationLink'] }] */
const _PaginationLink = <E extends ElementType = 'a'>(props: SpiritPaginationLinkProps<E>, ref: PolymorphicRef<E>) => {
  const { elementType: ElementTag = 'a', accessibilityLabel, isCurrent, pageNumber, ...restProps } = props;

  const { classProps } = usePaginationStyleProps({ isCurrent });
  const { styleProps, props: transferProps } = useStyleProps(restProps);

  return (
    <ElementTag
      ref={ref}
      {...transferProps}
      {...styleProps}
      className={classNames(classProps.link, styleProps.className)}
    >
      <VisuallyHidden>{accessibilityLabel}</VisuallyHidden>
      <span aria-hidden="true">{pageNumber}</span>
    </ElementTag>
  );
};

const PaginationLink = forwardRef<HTMLAnchorElement, SpiritPaginationLinkProps<ElementType>>(_PaginationLink);

export default PaginationLink;
