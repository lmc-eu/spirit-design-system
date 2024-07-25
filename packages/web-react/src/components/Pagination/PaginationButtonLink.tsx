'use client';

import React, { ElementType, ForwardedRef, forwardRef } from 'react';
import { SpiritPaginationButtonLinkProps } from '../../types';
import { ButtonLink } from '../Button';
import { Icon } from '../Icon';
import { VisuallyHidden } from '../VisuallyHidden';

/* We need an exception for components exported with forwardRef */
/* eslint no-underscore-dangle: ['error', { allow: ['_PaginationButtonLink'] }] */
const _PaginationButtonLink = <E extends ElementType = 'a'>(
  props: SpiritPaginationButtonLinkProps<E>,
  ref: ForwardedRef<HTMLAnchorElement>,
) => {
  const { direction, accessibilityLabel, ...restProps } = props;

  const iconType = {
    previous: 'chevron-left',
    next: 'chevron-right',
  };

  return (
    <ButtonLink color="secondary" isSquare {...restProps} ref={ref}>
      <Icon name={iconType[direction]} />
      <VisuallyHidden>{accessibilityLabel}</VisuallyHidden>
    </ButtonLink>
  );
};

export const PaginationButtonLink = forwardRef<HTMLAnchorElement, SpiritPaginationButtonLinkProps>(
  _PaginationButtonLink,
);

export default PaginationButtonLink;
