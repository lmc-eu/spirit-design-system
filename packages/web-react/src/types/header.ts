import { ChildrenProps } from './shared';

export interface HeaderProps extends ChildrenProps {
  /* Identification of the header component */
  id: string;
}

export interface SpiritHeaderProps extends HeaderProps {
  /* Whether is Header inverted */
  isInverted?: boolean;
  /* Whether is Header simple */
  isSimple?: boolean;
}
