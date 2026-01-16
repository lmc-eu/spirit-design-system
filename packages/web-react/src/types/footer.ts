import { type ElementType } from 'react';
import {
  type BackgroundColorsDictionaryType,
  type ChildrenProps,
  type SpaceToken,
  type SpiritPolymorphicElementPropsWithRef,
  type StyleProps,
  type TextAlignmentType,
} from './shared';

export interface FooterStyleProps {
  paddingTop?: SpaceToken;
  paddingBottom?: SpaceToken;
  backgroundColor?: BackgroundColorsDictionaryType;
  textAlignment?: TextAlignmentType;
}

export interface FooterBaseProps extends FooterStyleProps, ChildrenProps, StyleProps {}

export type FooterProps<E extends ElementType> = {
  /**
   * The HTML element or React element used to render the footer, e.g. 'footer', 'div', 'section'.
   *
   * @default 'footer'
   */
  elementType?: E;
} & FooterBaseProps;

export type SpiritFooterProps<E extends ElementType = 'footer'> = FooterProps<E> &
  SpiritPolymorphicElementPropsWithRef<E, FooterProps<E>>;
