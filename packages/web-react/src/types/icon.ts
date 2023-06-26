import React from 'react';
import { ChildrenProps, StyleProps, TransferProps } from './shared';

export interface IconProps extends StyleProps, ChildrenProps, React.SVGAttributes<SVGElement>, TransferProps {
  /** Aria hidden */
  ariaHidden?: boolean;
  /** Size of the icon */
  boxSize?: number;
  /** Name of the icon */
  name: string;
  /** Title of the icon */
  title?: string;
}
