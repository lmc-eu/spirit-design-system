import { ElementType, JSXElementConstructor } from 'react';
import { Sizes } from '../constants';
import {
  AlignmentXDictionaryType,
  ChildrenProps,
  DirectionExtendedDictionaryType,
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
export type CardDirectionType =
  | NonNullable<DirectionExtendedDictionaryType>
  | { [key: string]: NonNullable<DirectionExtendedDictionaryType> };

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
