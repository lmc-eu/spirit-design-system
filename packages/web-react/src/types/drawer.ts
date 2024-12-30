import { ComponentPropsWithRef, ElementType } from 'react';
import {
  AlignmentXDictionaryType,
  ChildrenProps,
  ClickEvent,
  OmittedExtendedUnsafeStyleProps,
  SpiritDialogElementProps,
  StyleProps,
} from './shared';

export type DrawerDialogElementType = 'aside' | 'form';

export type DrawerDialogHandlingProps = {
  isOpen: boolean;
  onClose: (event: ClickEvent) => void;
  closeOnBackdropClick?: boolean;
  closeOnEscapeKeyDown?: boolean;
};

export interface DrawerCloseButtonProps extends DrawerDialogHandlingProps {
  id: string;
  label?: string;
}

export type DrawerDialogBaseProps<E extends ElementType = DrawerDialogElementType> = {
  elementType?: E;
} & ChildrenProps &
  StyleProps;

export type DrawerDialogCSSHeight = string;
export type DrawerDialogCSSHeightBreakpoints = {
  mobile?: DrawerDialogCSSHeight;
  tablet?: DrawerDialogCSSHeight;
  desktop?: DrawerDialogCSSHeight;
};

export type DrawerDialogProps<E extends ElementType = DrawerDialogElementType> = {
  height?: DrawerDialogCSSHeight | DrawerDialogCSSHeightBreakpoints;
  maxHeight?: DrawerDialogCSSHeight | DrawerDialogCSSHeightBreakpoints;
} & DrawerDialogBaseProps<E> &
  OmittedExtendedUnsafeStyleProps<ComponentPropsWithRef<E>, keyof DrawerDialogBaseProps<E>>;

export interface DrawerBaseProps
  extends Omit<SpiritDialogElementProps, 'id'>,
    DrawerDialogHandlingProps,
    ChildrenProps {
  alignment?: AlignmentXDictionaryType;
  id: string;
}

export interface SpiritDrawerProps extends DrawerBaseProps {}
