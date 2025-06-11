import { ElementType, JSXElementConstructor } from 'react';
import { BreakpointToken, ChildrenProps, SpaceToken, StyleProps, TransferProps } from './shared';

export type MatrixColumns = 1 | 2 | 3 | 4 | 5 | 6 | 12;

export interface MatrixElementTypeProps<T extends ElementType = 'div'> {
  /**
   * The HTML element or React element used to render the Matrix, e.g. 'div'.
   *
   * @default 'div'
   */
  elementType?: T | JSXElementConstructor<unknown>;
}

export interface MatrixCustomLayoutProps {
  /** Custom columns in the matrix */
  cols?: MatrixColumns | Partial<Record<BreakpointToken, number>>;
  /** Custom rows in the matrix */
  rows?: number | Partial<Record<BreakpointToken, number>>;
  /** Custom number of rows for each item */
  itemRows?: number | Partial<Record<BreakpointToken, number>>;
  /** Custom spacing between items */
  spacing?: SpaceToken | Partial<Record<BreakpointToken, SpaceToken>>;
  /** Custom horizontal spacing between items */
  spacingX?: SpaceToken | Partial<Record<BreakpointToken, SpaceToken>>;
  /** Custom vertical spacing between items */
  spacingY?: SpaceToken | Partial<Record<BreakpointToken, SpaceToken>>;
}

export interface MatrixProps<T extends ElementType = 'div'>
  extends MatrixElementTypeProps<T>,
    MatrixCustomLayoutProps {}

export interface SpiritMatrixProps<T extends ElementType = 'div'>
  extends MatrixProps<T>,
    ChildrenProps,
    StyleProps,
    TransferProps {}
