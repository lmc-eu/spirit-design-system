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

export type ModalComposedDialogElementType = 'article' | 'form';

export type ModalComposedDialogHandlingProps = {
  isOpen: boolean;
  onClose: (event: ClickEvent) => void;
};

export type ModalComposedDialogBaseProps<E extends ElementType = ModalComposedDialogElementType> = {
  elementType?: E;
  isExpandedOnMobile?: boolean;
} & ChildrenProps &
  StyleProps;

export type ModalComposedDialogProps<E extends ElementType = ModalComposedDialogElementType> =
  ModalComposedDialogBaseProps<E> &
    OmittedExtendedUnsafeStyleProps<ComponentPropsWithRef<E>, keyof ModalComposedDialogBaseProps<E>>;

export interface ModalComposedBodyProps extends SpiritDivElementProps, ChildrenProps {}

export interface ModalComposedHeaderProps extends SpiritElementProps, ChildrenProps {
  closeLabel?: string;
}

export interface ModalComposedFooterProps extends SpiritElementProps, ChildrenProps {
  align?: AlignmentXDictionaryType;
  description?: string;
}

export interface ModalComposedBaseProps
  extends Omit<SpiritDialogElementProps, 'id'>,
    ModalComposedDialogHandlingProps,
    ChildrenProps {
  id: string;
}

export interface SpiritModalComposedProps extends ModalComposedBaseProps {}
