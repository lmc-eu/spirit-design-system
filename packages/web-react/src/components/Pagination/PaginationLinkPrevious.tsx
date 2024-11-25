'use client';

import React, { ElementType, ForwardedRef, forwardRef } from 'react';
import { PolymorphicForwardRef, SpiritPaginationLinkPreviousNextProps } from '../../types';
import { PAGINATION_PREVIOUS_LINK_DEFAULT_ACCESSIBILITY_LABEL } from './constants';
import PaginationButtonLink from './PaginationButtonLink';

/* We need an exception for components exported with forwardRef */
/* eslint no-underscore-dangle: ['error', { allow: ['_PaginationLinkPrevious'] }] */
const _PaginationLinkPrevious = <E extends ElementType = 'a'>(
  {
    accessibilityLabel = PAGINATION_PREVIOUS_LINK_DEFAULT_ACCESSIBILITY_LABEL,
    ...restProps
  }: SpiritPaginationLinkPreviousNextProps<E>,
  ref: ForwardedRef<HTMLAnchorElement>,
) => (
  <PaginationButtonLink
    href={restProps.href}
    direction="previous"
    accessibilityLabel={accessibilityLabel}
    ref={ref}
    {...restProps}
  />
);

const PaginationLinkPrevious = (forwardRef as PolymorphicForwardRef)(_PaginationLinkPrevious);

export default PaginationLinkPrevious;
