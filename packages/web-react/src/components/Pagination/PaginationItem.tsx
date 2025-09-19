'use client';

import classNames from 'classnames';
import React from 'react';
import { useStyleProps } from '../../hooks';
import { type SpiritPaginationItemProps } from '../../types';
import { usePaginationStyleProps } from './usePaginationStyleProps';

const PaginationItem = (props: SpiritPaginationItemProps) => {
  const { children, ...restProps } = props;

  const { classProps } = usePaginationStyleProps();
  const { styleProps, props: transferProps } = useStyleProps(restProps);

  return (
    <li {...transferProps} {...styleProps} className={classNames(classProps.item, styleProps.className)}>
      {children}
    </li>
  );
};

PaginationItem.spiritComponent = 'PaginationItem';

export default PaginationItem;
