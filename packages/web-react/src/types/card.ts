import { ElementType, JSXElementConstructor } from 'react';
import { Direction, Sizes } from '../constants';
import {
  AlignmentXDictionaryType,
  ChildrenProps,
  SpiritPolymorphicElementPropsWithRef,
  StyleProps,
  TransferProps,
} from './shared';

export const CardSizes = {
  ...Sizes,
  AUTO: 'auto',
} as const;

export type CardSizesDictionaryKeys = keyof typeof CardSizes;
export type CardSizesDictionaryType<T = undefined> = (typeof CardSizes)[CardSizesDictionaryKeys] | T;

export const CardDirection = {
  ...Direction,
  HORIZONTAL_REVERSED: 'horizontal-reversed',
};

export type CardDirectionDictionaryKeys = keyof typeof CardDirection;
export type CardDirectionDictionaryType = (typeof CardDirection)[CardDirectionDictionaryKeys];

export type CardAlignmentXType =
  | NonNullable<AlignmentXDictionaryType>
  | { [key: string]: NonNullable<AlignmentXDictionaryType> };

export interface CardElementTypeProps<T extends ElementType = 'article'> {
  /**
   * The HTML element or React element used to render the Card, e.g. 'div'.
   *
   * @default 'article'
   */
  elementType?: T | JSXElementConstructor<unknown>;
}

// Card types
// Extend direction props to include horizontal-reversed
export type HorizontalReversedType = 'horizontal-reversed';
export type CardDirectionType =
  | NonNullable<CardDirectionDictionaryType>
  | { [key: string]: NonNullable<CardDirectionDictionaryType> };

export interface CardProps<T extends ElementType = 'article'> extends CardElementTypeProps<T> {
  direction?: CardDirectionType;
  isBoxed?: boolean;
}

export interface SpiritCardProps<T extends ElementType = 'article'>
  extends CardProps<T>,
    ChildrenProps,
    StyleProps,
    TransferProps {}

// CardMedia types
export interface CardMediaProps {
  isExpanded?: boolean;
  size?: CardSizesDictionaryType;
  hasFilledHeight?: boolean;
}

export interface SpiritCardMediaProps extends CardMediaProps, ChildrenProps, StyleProps, TransferProps {}

// CardLogo types
export interface SpiritCardLogoProps extends ChildrenProps, StyleProps, TransferProps {}

// CardArtwork types
export interface CardArtworkProps {
  alignmentX?: CardAlignmentXType;
}
export interface SpiritCardArtworkProps extends CardArtworkProps, ChildrenProps, StyleProps, TransferProps {}

// CardBody types
export interface CardBodyProps {
  isSelectable?: boolean;
}

export interface SpiritCardBodyProps extends CardBodyProps, ChildrenProps, StyleProps, TransferProps {}

// CardEyebrow types
export interface SpiritCardEyebrowProps extends ChildrenProps, StyleProps, TransferProps {}

// CardTitle types
export interface CardTitleProps {
  isHeading?: boolean;
}

export interface SpiritCardTitleProps<T extends ElementType = 'h4'>
  extends CardTitleProps,
    CardElementTypeProps<T>,
    ChildrenProps,
    StyleProps,
    TransferProps {}

// CardFooter types
export interface CardFooterProps {
  alignmentX?: CardAlignmentXType;
}

export interface SpiritCardFooterProps extends CardFooterProps, ChildrenProps, StyleProps, TransferProps {}

// CardLink types
export type CardLinkProps<E extends ElementType = 'a'> = {
  /**
   * The HTML element or React element used to render the Link, e.g. 'a'.
   *
   * @default 'a'
   */
  elementType?: E;
};

export type SpiritCardLinkProps<E extends ElementType = 'a'> = CardLinkProps<E> &
  SpiritPolymorphicElementPropsWithRef<E, CardLinkProps<E>>;
