import { ElementType, JSXElementConstructor } from 'react';
import {
  BorderRadiiDictionaryType,
  BreakpointToken,
  ChildrenProps,
  SizeExtendedDictionaryType,
  StyleProps,
  TransferProps,
} from './shared';

export interface AriaSkeletonElementTypeProps<T extends ElementType = 'div'> {
  /**
   * The HTML element or React element used to render the Skeleton, e.g. 'div', 'span'.
   *
   * @default 'div'
   */
  elementType?: T | JSXElementConstructor<unknown>;
}

export type SkeletonSize<C> = SizeExtendedDictionaryType | C;

export type SkeletonRadius<C> =
  | BorderRadiiDictionaryType
  | Partial<Record<BreakpointToken, BorderRadiiDictionaryType>>
  | C;

export interface SkeletonProps extends ChildrenProps, StyleProps, TransferProps {}

export interface SpiritSkeletonProps<T extends ElementType = 'div', C = void>
  extends AriaSkeletonElementTypeProps<T>,
    SkeletonProps {
  size?: SkeletonSize<C>;
  lines?: number;
}

export interface SpiritSkeletonShapeProps<T extends ElementType = 'div', C = void>
  extends AriaSkeletonElementTypeProps<T>,
    SkeletonProps {
  width: number;
  height: number;
  borderRadius?: SkeletonRadius<C>;
}
