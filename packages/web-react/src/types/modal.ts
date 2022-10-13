import { ChildrenProps, StyleProps, ClickEvent } from './shared';
import { SpiritButtonProps } from './button';

export interface SpiritModalProps
  extends ChildrenProps,
    StyleProps,
    Partial<Omit<HTMLDialogElement, 'children' | 'style' | 'className'>> {
  id: string;
  isOpen?: boolean;
  onClose?: (event: ClickEvent | KeyboardEvent) => void;
  closeButtonProps?: SpiritModalCloseButtonProps;
  closeOnBackdrop?: boolean;
  closeOnEscape?: boolean; // Will be handled soon
  parentId?: string;
  showBodyClose?: boolean;
}

export interface SpiritModalHeaderProps extends Pick<SpiritModalProps, 'children'> {}

export interface SpiritModalContentProps extends Pick<SpiritModalProps, 'children'> {}

export interface SpiritModalDialogProps extends Pick<SpiritModalProps, 'children'> {}

export interface SpiritModalBodyProps extends Pick<SpiritModalProps, 'children'> {}

export interface SpiritModalFooterProps extends Pick<SpiritModalProps, 'children'> {}

export interface SpiritModalCloseButtonProps extends SpiritButtonProps {}
