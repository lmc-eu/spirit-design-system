import { ChildrenProps, StyleProps, TransferProps } from './shared';

export interface IconProps extends StyleProps, ChildrenProps, React.SVGAttributes<SVGElement>, TransferProps {
  /** Name of the icon */
  name: string;
  /** Size of the icon */
  size?: number;
  /** Title of the icon */
  title?: string;
}
