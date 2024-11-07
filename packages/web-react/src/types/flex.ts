import { ElementType, JSXElementConstructor } from 'react';
import {
  AlignmentXExtendedDictionaryType,
  AlignmentYExtendedDictionaryType,
  BreakpointToken,
  ChildrenProps,
  SpaceToken,
  StyleProps,
  TransferProps,
} from './shared';

export interface FlexElementTypeProps<T extends ElementType = 'div'> {
  /**
   * The HTML element or React element used to render the Flex, e.g. 'div'.
   *
   * @default 'div'
   */
  elementType?: T | JSXElementConstructor<unknown>;
}

export type FlexDirection = 'row' | 'column';
export type FlexDirectionType = FlexDirection | { [key: string]: FlexDirection };
export type FlexAlignmentXType =
  | NonNullable<AlignmentXExtendedDictionaryType>
  | { [key: string]: NonNullable<AlignmentXExtendedDictionaryType> };
export type FlexAlignmentYType =
  | NonNullable<AlignmentYExtendedDictionaryType>
  | { [key: string]: NonNullable<AlignmentYExtendedDictionaryType> };
export type FlexWrapType = boolean | { [key: string]: boolean };

export interface FlexCustomLayoutProps {
  alignmentX?: FlexAlignmentXType;
  alignmentY?: FlexAlignmentYType;
  direction?: FlexDirectionType;
  isWrapping?: FlexWrapType;
  /** Custom spacing between items */
  spacing?: SpaceToken | Partial<Record<BreakpointToken, SpaceToken>>;
  /** Custom horizontal spacing between items */
  spacingX?: SpaceToken | Partial<Record<BreakpointToken, SpaceToken>>;
  /** Custom vertical spacing between items */
  spacingY?: SpaceToken | Partial<Record<BreakpointToken, SpaceToken>>;
}

export interface FlexProps<T extends ElementType = 'div'> extends FlexElementTypeProps<T>, FlexCustomLayoutProps {}

export interface SpiritFlexProps<T extends ElementType = 'div'>
  extends FlexProps<T>,
    ChildrenProps,
    StyleProps,
    TransferProps {}
