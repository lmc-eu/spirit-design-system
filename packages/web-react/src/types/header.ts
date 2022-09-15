import { ChildrenProps, TransferProps } from './shared';

export interface HeaderProps extends ChildrenProps, TransferProps {
  /* Identification of the header component */
  id: string;
}

export interface SpiritHeaderProps extends HeaderProps {
  /* Whether is Header inverted */
  isInverted?: boolean;
  /* Whether is Header simple */
  isSimple?: boolean;
}
