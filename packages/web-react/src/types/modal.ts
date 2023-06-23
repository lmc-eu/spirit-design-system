import { ElementType, ComponentPropsWithRef } from 'react';
import {
  ChildrenProps,
  ClickEvent,
  OmittedExtendedUnsafeStyleProps,
  StyleProps,
  SpiritDivElementProps,
  SpiritDialogElementProps,
  SpiritElementProps,
  AlignmentXDictionaryType,
} from './shared';

export type ModalDialogElementType = 'article' | 'form';

export type ModalDialogHandlingProps = {
  isOpen: boolean;
  onClose: (event: ClickEvent) => void;
};

export type ModalDialogBaseProps<E extends ElementType = ModalDialogElementType> = {
  elementType?: E;
  isExpandedOnMobile?: boolean;
} & ChildrenProps &
  StyleProps;

export type ModalDialogProps<E extends ElementType = ModalDialogElementType> = {
  maxHeightFromTabletUp?: string;
  preferredHeightOnMobile?: string;
  preferredHeightFromTabletUp?: string;
} & ModalDialogBaseProps<E> &
  OmittedExtendedUnsafeStyleProps<ComponentPropsWithRef<E>, keyof ModalDialogBaseProps<E>>;

export interface ModalBodyProps extends SpiritDivElementProps, ChildrenProps {}

export interface ModalHeaderProps extends SpiritElementProps, ChildrenProps {
  closeLabel?: string;
}

export interface ModalFooterProps extends SpiritElementProps, ChildrenProps {
  align?: AlignmentXDictionaryType;
  alignmentX?: AlignmentXDictionaryType;
  description?: string;
}

export interface ModalBaseProps extends Omit<SpiritDialogElementProps, 'id'>, ModalDialogHandlingProps, ChildrenProps {
  id: string;
}

export interface SpiritModalProps extends ModalBaseProps {}
