import { ComponentPropsWithRef, ElementType } from 'react';
import {
  AlignmentXDictionaryType,
  AlignmentYDictionaryType,
  ChildrenProps,
  ClickEvent,
  SpiritDialogElementProps,
  SpiritDivElementProps,
  SpiritElementProps,
  StyleProps,
} from './shared';

export type ModalDialogHandlingProps = {
  isOpen: boolean;
  onClose: (event: ClickEvent) => void;
  closeOnBackdropClick?: boolean;
  closeOnEscapeKeyDown?: boolean;
};

export interface ModalCloseButtonProps extends ModalDialogHandlingProps {
  id: string;
  label?: string;
}

export type ModalDialogBaseProps<E extends ElementType = 'article'> = {
  elementType?: E;
  isDockedOnMobile?: boolean;
  isExpandedOnMobile?: boolean;
  isScrollable?: boolean;
} & ChildrenProps &
  StyleProps;

export type ModalDialogCSSHeight = string;
export type ModalDialogCSSHeightBreakpoints = {
  mobile?: ModalDialogCSSHeight;
  tablet?: ModalDialogCSSHeight;
  desktop?: ModalDialogCSSHeight;
};

export type ModalDialogProps<E extends ElementType = 'article'> = {
  height?: ModalDialogCSSHeight | ModalDialogCSSHeightBreakpoints;
  maxHeight?: ModalDialogCSSHeight | ModalDialogCSSHeightBreakpoints;
} & ModalDialogBaseProps<E> &
  ComponentPropsWithRef<E>;

export interface ModalBodyProps extends SpiritDivElementProps, ChildrenProps {}

export interface ModalHeaderProps extends SpiritElementProps, ChildrenProps {
  closeLabel?: string;
  hasCloseButton?: boolean;
}

export interface ModalFooterProps extends SpiritElementProps, ChildrenProps {
  alignmentX?: AlignmentXDictionaryType;
  description?: string;
}

export interface ModalBaseProps extends Omit<SpiritDialogElementProps, 'id'>, ModalDialogHandlingProps, ChildrenProps {
  alignmentY?: AlignmentYDictionaryType;
  id: string;
}

export interface SpiritModalProps extends ModalBaseProps {}
