import React, { ElementType, ForwardedRef, forwardRef } from 'react';
import { SpiritPaginationLinkPreviousNextProps } from '../../types';
import { PAGINATION_NEXT_LINK_DEFAULT_ACCESSIBILITY_LABEL } from './constants';
import PaginationButtonLink from './PaginationButtonLink';

/* We need an exception for components exported with forwardRef */
/* eslint no-underscore-dangle: ['error', { allow: ['_PaginationLinkNext'] }] */
const _PaginationLinkNext = <E extends ElementType = 'a'>(
  {
    accessibilityLabel = PAGINATION_NEXT_LINK_DEFAULT_ACCESSIBILITY_LABEL,
    ...restProps
  }: SpiritPaginationLinkPreviousNextProps<E>,
  ref: ForwardedRef<HTMLAnchorElement>,
) => <PaginationButtonLink direction="next" accessibilityLabel={accessibilityLabel} ref={ref} {...restProps} />;

export const PaginationLinkNext = forwardRef<HTMLAnchorElement, SpiritPaginationLinkPreviousNextProps>(
  _PaginationLinkNext,
);

export default PaginationLinkNext;
