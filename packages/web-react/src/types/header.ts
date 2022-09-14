import { ChildrenProps, RestProps } from './shared';

export interface HeaderProps extends ChildrenProps, RestProps {
  /* Identification of the header component */
  id: string;
}

export interface SpiritHeaderProps extends HeaderProps {
  /* Whether is Header inverted */
  isInverted?: boolean;
  /* Whether is Header simple */
  isSimple?: boolean;
}
