import classNames from 'classnames';
import React from 'react';
import { useStyleProps } from '../../hooks';
import { SpiritPaginationItemProps } from '../../types';
import { usePaginationStyleProps } from './usePaginationStyleProps';

export const PaginationItem = (props: SpiritPaginationItemProps) => {
  const { children, ...restProps } = props;

  const { classProps } = usePaginationStyleProps();
  const { styleProps, props: transferProps } = useStyleProps(restProps);

  return (
    <li {...transferProps} {...styleProps} className={classNames(classProps.item, styleProps.className)}>
      {children}
    </li>
  );
};

export default PaginationItem;
