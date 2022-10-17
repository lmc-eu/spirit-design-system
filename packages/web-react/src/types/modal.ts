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

export interface SpiritModalHeaderProps extends ChildrenProps {}

export interface SpiritModalContentProps extends ChildrenProps {}

export interface SpiritModalDialogProps extends ChildrenProps {}

export interface SpiritModalBodyProps extends ChildrenProps {}

export interface SpiritModalFooterProps extends ChildrenProps {}

export interface SpiritModalCloseButtonProps extends SpiritButtonProps {}
