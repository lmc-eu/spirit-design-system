import { ChildrenProps } from './shared';

export type HeaderProps = ChildrenProps;

export interface SpiritHeaderProps extends HeaderProps {
  /* Whether is Header inverted */
  isInverted?: boolean;
  /* Whether is Header simple */
  isSimple?: boolean;
}
