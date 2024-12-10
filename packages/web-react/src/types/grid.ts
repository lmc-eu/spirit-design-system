import { ElementType, JSXElementConstructor } from 'react';
import {
  AlignmentXExtendedDictionaryType,
  AlignmentYExtendedDictionaryType,
  ChildrenProps,
  ExpandableBreakpointToken,
  ExpandableSpaceToken,
  StyleProps,
  TransferProps,
} from './shared';

export type GridColumns = 1 | 2 | 3 | 4 | 5 | 6 | 12;
export type GridColsBreakpoints = {
  mobile?: GridColumns;
  tablet?: GridColumns;
  desktop?: GridColumns;
};
export type GridItemSpan = `span ${number}`;
export type GridItemPositionBreakpoints = {
  mobile?: number | GridItemSpan;
  tablet?: number | GridItemSpan;
  desktop?: number | GridItemSpan;
};
export type GridItemPosition = number | GridItemSpan | GridItemPositionBreakpoints;

export interface GridElementTypeProps<T extends ElementType = 'div'> {
  /**
   * The HTML element or React element used to render the Grid, e.g. 'div'.
   *
   * @default 'div'
   */
  elementType?: T | JSXElementConstructor<unknown>;
}

export interface GridItemElementTypeProps<T extends ElementType = 'div'> {
  /**
   * The HTML element or React element used to render the GridItem, e.g. 'div'.
   *
   * @default 'div'
   */
  elementType?: T | JSXElementConstructor<unknown>;
}

export type GridAlignmentXType =
  | NonNullable<AlignmentXExtendedDictionaryType>
  | { [key: string]: NonNullable<AlignmentXExtendedDictionaryType> };
export type GridAlignmentYType =
  | NonNullable<AlignmentYExtendedDictionaryType>
  | { [key: string]: NonNullable<AlignmentYExtendedDictionaryType> };

export interface GridCustomLayoutProps {
  alignmentX?: GridAlignmentXType;
  alignmentY?: GridAlignmentYType;
  cols?: GridColumns | GridColsBreakpoints;
  /** Custom spacing between items */
  spacing?: ExpandableSpaceToken | Partial<Record<ExpandableBreakpointToken, ExpandableSpaceToken>>;
  /** Custom horizontal spacing between items */
  spacingX?: ExpandableSpaceToken | Partial<Record<ExpandableBreakpointToken, ExpandableSpaceToken>>;
  /** Custom vertical spacing between items */
  spacingY?: ExpandableSpaceToken | Partial<Record<ExpandableBreakpointToken, ExpandableSpaceToken>>;
}

export interface GridItemCustomLayoutProps {
  columnEnd?: GridItemPosition;
  columnStart?: GridItemPosition;
  rowEnd?: GridItemPosition;
  rowStart?: GridItemPosition;
}

export interface GridProps<T extends ElementType = 'div'> extends GridElementTypeProps<T>, GridCustomLayoutProps {}

export interface GridItemProps<T extends ElementType = 'div'>
  extends GridItemElementTypeProps<T>,
    GridItemCustomLayoutProps {}

export interface SpiritGridProps<T extends ElementType = 'div'>
  extends GridProps<T>,
    ChildrenProps,
    StyleProps,
    TransferProps {}

export interface SpiritGridItemProps<T extends ElementType = 'div'>
  extends GridItemProps<T>,
    ChildrenProps,
    StyleProps,
    TransferProps {}
