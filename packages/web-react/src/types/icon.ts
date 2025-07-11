import type { SVGAttributes } from 'react';
import { BreakpointToken, ChildrenProps, IconDualtoneColorsType, StyleProps, TransferProps } from './shared';

export type IconBoxSize = number | Partial<Record<BreakpointToken, number>>;

export interface IconProps extends StyleProps, ChildrenProps, SVGAttributes<SVGElement>, TransferProps {
  /** Aria hidden */
  ariaHidden?: boolean;
  /** Size of the icon */
  boxSize?: IconBoxSize;
  /** Dualtone color for dualtone icons */
  dualtoneColor?: IconDualtoneColorsType;
  /** Name of the icon */
  name: string;
  /** Title of the icon */
  title?: string;
}

export interface SpiritIconProps extends IconProps {}
