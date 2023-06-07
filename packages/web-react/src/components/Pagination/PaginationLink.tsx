import React, { ElementType, ForwardedRef, forwardRef } from 'react';
import classNames from 'classnames';
import { SpiritPaginationLinkProps } from '../../types';
import { useStyleProps } from '../../hooks';
import { usePaginationStyleProps } from './usePaginationStyleProps';

/* We need an exception for components exported with forwardRef */
/* eslint no-underscore-dangle: ['error', { allow: ['_PaginationLink'] }] */
const _PaginationLink = <E extends ElementType = 'a'>(
  props: SpiritPaginationLinkProps<E>,
  ref: ForwardedRef<HTMLAnchorElement>,
) => {
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
      <span className="accessibility-hidden">{accessibilityLabel}</span>
      <span aria-hidden="true">{pageNumber}</span>
    </ElementTag>
  );
};

export const PaginationLink = forwardRef<HTMLAnchorElement, SpiritPaginationLinkProps>(_PaginationLink);

export default PaginationLink;
