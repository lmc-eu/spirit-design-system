import React from 'react';
import classNames from 'classnames';
import { SpiritPaginationItemProps } from '../../types';
import { useStyleProps } from '../../hooks';
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
