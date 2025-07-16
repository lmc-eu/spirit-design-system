import type { SVGAttributes } from 'react';
import {
  AccentColorNamesType,
  BreakpointToken,
  ChildrenProps,
  EmotionColorsDictionaryType,
  StyleProps,
  TextColorsDictionaryType,
  TransferProps,
} from './shared';

export type IconBoxSize = number | Partial<Record<BreakpointToken, number>>;
export type IconColorType = TextColorsDictionaryType | EmotionColorsDictionaryType | AccentColorNamesType;

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
