import { ComponentPropsWithRef, ElementType } from 'react';
import { AlignmentX } from '../constants';
import { ButtonColor } from './button';
import {
  ChildrenProps,
  ClickEvent,
  OmittedExtendedUnsafeStyleProps,
  SpiritButtonElementProps,
  SpiritDialogElementProps,
  StyleProps,
} from './shared';

export type DrawerAlignmentXType = (typeof AlignmentX)['LEFT' | 'RIGHT'];

export type DrawerPanelElementType = 'aside' | 'form';

export type DrawerPanelHandlingProps = {
  isOpen: boolean;
  onClose: (event: ClickEvent) => void;
  closeOnBackdropClick?: boolean;
  closeOnEscapeKeyDown?: boolean;
};

export interface DrawerCloseButtonProps<C = void> extends Omit<SpiritButtonElementProps, 'children' | 'color'> {
  color?: ButtonColor<C>;
  label?: string;
}

export type DrawerPanelBaseProps<E extends ElementType = DrawerPanelElementType> = {
  elementType?: E;
} & ChildrenProps &
  StyleProps;

export type DrawerPanelProps<E extends ElementType = DrawerPanelElementType> = DrawerPanelBaseProps<E> &
  OmittedExtendedUnsafeStyleProps<ComponentPropsWithRef<E>, keyof DrawerPanelBaseProps<E>>;

export interface DrawerBaseProps extends Omit<SpiritDialogElementProps, 'id'>, DrawerPanelHandlingProps, ChildrenProps {
  alignmentX?: DrawerAlignmentXType;
  id: string;
}

export interface SpiritDrawerProps extends DrawerBaseProps {}
