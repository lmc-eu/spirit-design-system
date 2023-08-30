import { ElementType, JSXElementConstructor } from 'react';
import { ChildrenProps, StyleProps, TransferProps } from './shared';

export type GridColumns = 1 | 2 | 3 | 4 | 5 | 6 | 12;
export type GridSpanOverColumns = 2 | 4 | 6 | 8 | 10 | 12;

export interface GridElementTypeProps<T extends ElementType = 'div'> {
  /**
   * The HTML element or React element used to render the Grid, e.g. 'div'.
   *
   * @default 'div'
   */
  elementType?: T | JSXElementConstructor<unknown>;
}

export interface GridSpanElementTypeProps<T extends ElementType = 'div'> {
  /**
   * The HTML element or React element used to render the GridSpan, e.g. 'div'.
   *
   * @default 'div'
   */
  elementType?: T | JSXElementConstructor<unknown>;
}

export interface GridCustomLayoutProps {
  cols?: GridColumns;
  tablet?: GridColumns;
  desktop?: GridColumns;
}

export interface GridSpanCustomLayoutProps {
  over?: GridSpanOverColumns;
  tablet?: GridSpanOverColumns;
  desktop?: GridSpanOverColumns;
}

export interface GridProps<T extends ElementType = 'div'> extends GridElementTypeProps<T>, GridCustomLayoutProps {}

export interface GridSpanProps<T extends ElementType = 'div'>
  extends GridSpanElementTypeProps<T>,
    GridSpanCustomLayoutProps {}

export interface SpiritGridProps<T extends ElementType = 'div'>
  extends GridProps<T>,
    ChildrenProps,
    StyleProps,
    TransferProps {}

export interface SpiritGridSpanProps<T extends ElementType = 'div'>
  extends GridSpanProps<T>,
    ChildrenProps,
    StyleProps,
    TransferProps {}
