import { DialogProps, ElementTypeProps, ChildrenProps, TransferProps } from './shared';

export interface ModalProps extends DialogProps {}

export interface ModalMemberProps extends ChildrenProps, TransferProps, ElementTypeProps {}
