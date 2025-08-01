import { ElementType, JSXElementConstructor } from 'react';
import { IconBoxShapes } from '../components/IconBox/constants';
import {
  ChildrenProps,
  SpiritPolymorphicElementPropsWithRef,
  StyleProps,
  SizeExtendedDictionaryType,
  AccentColorToken,
  EmotionColorsDictionaryType,
} from './shared';

export type IconBoxShapeKeys = keyof typeof IconBoxShapes;
export type IconBoxShapeType = (typeof IconBoxShapes)[IconBoxShapeKeys];

export type IconBoxColorsType = AccentColorToken | EmotionColorsDictionaryType;

export interface IconBoxBaseProps extends ChildrenProps, StyleProps {
  /** The color of the iconBox. */
  color?: IconBoxColorsType;
  /** The shape of the iconBox. */
  shape?: IconBoxShapeType;
  /** Whether the iconBox has a border */
  hasBorder?: boolean;
  /** Name of the icon */
  iconName: string;
  /** Whether the iconBox is in subtle color scheme */
  isSubtle?: boolean;
  /** The size of the iconBox */
  size?: SizeExtendedDictionaryType;
}

export type IconBoxProps<E extends ElementType> = {
  /**
   * The HTML element or React element used to render the box, e.g. 'div', 'a', or `RouterLink`.
   *
   * @default 'div'
   */
  elementType?: E | JSXElementConstructor<unknown>;
} & IconBoxBaseProps;

export type SpiritIconBoxProps<E extends ElementType = 'div'> = IconBoxProps<E> &
  SpiritPolymorphicElementPropsWithRef<E, IconBoxProps<E>>;
