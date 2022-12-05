import { ChildrenProps, StyleProps, TransferProps } from '.';

export interface DialogProps extends ChildrenProps, TransferProps, StyleProps {
  isOpen: boolean;
  onClose: (event: Event) => void;
}
