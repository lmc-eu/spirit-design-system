import { type SVGAttributes } from 'react';
import {
  type AccentColorNamesType,
  type ChildrenProps,
  type EmotionColorNamesType,
  type SingleOrResponsive,
  type StyleProps,
  type TextColorNamesType,
  type TransferProps,
} from './shared';

export type IconBoxSize = SingleOrResponsive<number>;
export type IconColorType = TextColorNamesType | EmotionColorNamesType | AccentColorNamesType;

export interface IconProps extends StyleProps, ChildrenProps, SVGAttributes<SVGElement>, TransferProps {
  /** Aria hidden */
  ariaHidden?: boolean;
  /** Size of the icon */
  boxSize?: IconBoxSize;
  /** Color of the icon */
  color?: IconColorType;
  /** Name of the icon */
  name: string;
  /** Title of the icon */
  title?: string;
}

export interface SpiritIconProps extends IconProps {}
