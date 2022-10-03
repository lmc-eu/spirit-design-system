import { ChildrenProps, StyleProps, ClickEvent, ClickEvents } from './shared';
import { SpiritButtonProps } from './button';

export interface SpiritModalProps
  extends ChildrenProps,
    StyleProps,
    Partial<Omit<HTMLDialogElement, 'title' | 'children'>> {
  id: string;
  isOpen?: boolean;
  onClose?: (event: ClickEvent | KeyboardEvent) => void;
  contentProps?: SpiritModalContentProps;
  backdropProps?: SpiritModalBackdropProps;
  dialogProps?: SpiritModalDialogProps;
  closeButtonProps?: SpiritModalCloseButtonProps;
  closeOnBackdrop?: boolean;
  closeOnEscape?: boolean;
  parentSelector?: string;
  showBodyClose?: boolean;
}

export interface SpiritModalHeaderProps extends Pick<SpiritModalProps, 'children'>, StyleProps {}

export interface SpiritModalContentProps extends Pick<SpiritModalProps, 'children'>, StyleProps {}

export interface SpiritModalBackdropProps
  extends Pick<SpiritModalProps, 'isOpen' | 'closeOnBackdrop'>,
    StyleProps,
    ClickEvents {}

export interface SpiritModalDialogProps extends Pick<SpiritModalProps, 'children'>, StyleProps {}

export interface SpiritModalBodyProps extends Pick<SpiritModalProps, 'children'>, StyleProps {}

export interface SpiritModalFooterProps extends Pick<SpiritModalProps, 'children'>, StyleProps {}

export interface SpiritModalCloseButtonProps extends SpiritButtonProps {}

export interface useSpiritModalProps extends Pick<SpiritModalProps, 'isOpen' | 'onClose' | 'closeOnEscape'> {}

export interface useSpiritModalReturn {
  isOpen: boolean;
  onClose: (event: ClickEvent | KeyboardEvent) => void;
}
