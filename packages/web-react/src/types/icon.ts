import { ChildrenProps, StyleProps } from './shared';

export interface IconProps extends StyleProps, ChildrenProps, React.SVGAttributes<SVGElement> {
  /** Name of the icon */
  name: string;
  /** Size of the icon */
  size?: number;
  /** Title of the icon */
  title?: string;
}
