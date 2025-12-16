import { type ElementType, type JSXElementConstructor } from 'react';
import {
  type AlignmentXExtendedDictionaryType,
  type AlignmentYExtendedDictionaryType,
  type ChildrenProps,
  type DirectionExtendedDictionaryType,
  type SingleOrResponsive,
  type SpaceToken,
  type SpiritPolymorphicElementPropsWithRef,
  type StyleProps,
} from './shared';

export interface FlexElementTypeProps<T extends ElementType = 'div'> {
  /**
   * The HTML element or React element used to render the Flex, e.g. 'div'.
   *
   * @default 'div'
   */
  elementType?: T | JSXElementConstructor<unknown>;
}

/**
 * @deprecated "row" and "column" values will be replaced in the next major version. Please use "horizontal" and "vertical" instead.
 * @see https://jira.almacareer.tech/browse/DS-1629
 */
export type FlexDirection = DirectionExtendedDictionaryType | 'row' | 'column';
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
  spacing?: SingleOrResponsive<SpaceToken>;
  /** Custom horizontal spacing between items */
  spacingX?: SingleOrResponsive<SpaceToken>;
  /** Custom vertical spacing between items */
  spacingY?: SingleOrResponsive<SpaceToken>;
}

export interface FlexProps<T extends ElementType = 'div'> extends FlexElementTypeProps<T>, FlexCustomLayoutProps {}

export type SpiritFlexProps<T extends ElementType = 'div'> = FlexProps<T> &
  ChildrenProps &
  StyleProps &
  SpiritPolymorphicElementPropsWithRef<T, FlexProps<T>>;
