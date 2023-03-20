import { ElementType, JSXElementConstructor } from 'react';
import { ChildrenProps, StyleProps, TransferProps } from './shared';

export type PaginationItem = {
  pageNumber: number;
};

export interface AriaPaginationElementTypeProps<T extends ElementType = 'nav'> {
  /**
   * The HTML element or React element used to render., e.g. 'div', 'span'.
   *
   * @default 'nav'
   */
  elementType?: T | JSXElementConstructor<unknown>;
}

export interface PaginationProps extends StyleProps, TransferProps {}

export interface SpiritPaginationProps<T extends ElementType = 'nav'>
  extends AriaPaginationElementTypeProps<T>,
    StyleProps,
    ChildrenProps {
  totalPages: number;
  onPageChange: (pageNumber: number) => void;
  defaultPage: number;
}
