import { ElementType, JSXElementConstructor } from 'react';
import { IconBoxBorderRadii } from '../components/IconBox/constants';
import { BoxBackgroundColorsType } from './box';
import { ChildrenProps, SpiritPolymorphicElementPropsWithRef, StyleProps, SizeExtendedDictionaryType } from './shared';

export type IconBoxRadiiKeys = keyof typeof IconBoxBorderRadii;
export type IconBoxRadiiType = (typeof IconBoxBorderRadii)[IconBoxRadiiKeys];

export interface IconBoxBaseProps extends ChildrenProps, StyleProps {
  /** The color of the iconBox. */
  color?: BoxBackgroundColorsType;
  /** The border radius of the iconBox. */
  borderRadius?: IconBoxRadiiType;
  /** Whether the iconBox has a border */
  hasBorder?: boolean;
  /** Name of the icon */
  iconName: string;
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
