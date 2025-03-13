import React from 'react';
import { BreakpointToken, ChildrenProps, StyleProps, TransferProps } from './shared';

export type IconBoxSize = number | Partial<Record<BreakpointToken, number>>;

export interface IconProps extends StyleProps, ChildrenProps, React.SVGAttributes<SVGElement>, TransferProps {
  /** Aria hidden */
  ariaHidden?: boolean;
  /** Size of the icon */
  boxSize?: IconBoxSize;
  /** Name of the icon */
  name: string;
  /** Title of the icon */
  title?: string;
}

export interface SpiritIconProps extends IconProps {}
