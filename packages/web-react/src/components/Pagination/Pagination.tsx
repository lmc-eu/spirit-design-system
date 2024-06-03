import classNames from 'classnames';
import React from 'react';
import { useStyleProps } from '../../hooks';
import { SpiritPaginationProps } from '../../types';
import { usePaginationStyleProps } from './usePaginationStyleProps';

export const Pagination = (props: SpiritPaginationProps) => {
  const { children, listProps = {}, ...restProps } = props;

  const { classProps } = usePaginationStyleProps();
  const { styleProps, props: transferProps } = useStyleProps(restProps);
  const { styleProps: listStyleProps, props: listTransferProps } = useStyleProps(listProps);

  return (
    <nav {...transferProps} {...styleProps}>
      <ul {...listStyleProps} {...listTransferProps} className={classNames(classProps.root, listStyleProps.className)}>
        {children}
      </ul>
    </nav>
  );
};

export default Pagination;
