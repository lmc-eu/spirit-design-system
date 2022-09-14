import { ChildrenProps, StyleProps, RestProps } from './shared';

export interface IconProps extends StyleProps, ChildrenProps, React.SVGAttributes<SVGElement>, RestProps {
  /** Name of the icon */
  name: string;
  /** Size of the icon */
  size?: number;
  /** Title of the icon */
  title?: string;
  /** Aria hidden */
  ariaHidden?: boolean;
}
