import { ComponentPropsWithRef, ElementType } from 'react';
import {
  AlignmentXDictionaryType,
  ChildrenProps,
  ClickEvent,
  OmittedExtendedUnsafeStyleProps,
  SpiritDialogElementProps,
  StyleProps,
} from './shared';

export type DrawerPanelElementType = 'aside' | 'form';

export type DrawerPanelHandlingProps = {
  isOpen: boolean;
  onClose: (event: ClickEvent) => void;
  closeOnBackdropClick?: boolean;
  closeOnEscapeKeyDown?: boolean;
};

export interface DrawerCloseButtonProps extends DrawerPanelHandlingProps {
  id: string;
  label?: string;
}

export type DrawerPanelBaseProps<E extends ElementType = DrawerPanelElementType> = {
  elementType?: E;
} & ChildrenProps &
  StyleProps;

export type DrawerPanelCSSHeight = string;
export type DrawerPanelCSSHeightBreakpoints = {
  mobile?: DrawerPanelCSSHeight;
  tablet?: DrawerPanelCSSHeight;
  desktop?: DrawerPanelCSSHeight;
};

export type DrawerPanelProps<E extends ElementType = DrawerPanelElementType> = {
  height?: DrawerPanelCSSHeight | DrawerPanelCSSHeightBreakpoints;
  maxHeight?: DrawerPanelCSSHeight | DrawerPanelCSSHeightBreakpoints;
} & DrawerPanelBaseProps<E> &
  OmittedExtendedUnsafeStyleProps<ComponentPropsWithRef<E>, keyof DrawerPanelBaseProps<E>>;

export interface DrawerBaseProps extends Omit<SpiritDialogElementProps, 'id'>, DrawerPanelHandlingProps, ChildrenProps {
  alignment?: AlignmentXDictionaryType;
  id: string;
}

export interface SpiritDrawerProps extends DrawerBaseProps {}
