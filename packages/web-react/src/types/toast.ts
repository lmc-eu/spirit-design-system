import { ElementType } from 'react';
import { BasicToastColors } from '../components/Toast/constants';
import { LinkTarget } from './link';
import {
  AlignmentXDictionaryType,
  AlignmentYDictionaryType,
  ChildrenProps,
  EmotionColorNamesType,
  StyleProps,
} from './shared';

export type BasicToastColorsNamesType = (typeof BasicToastColors)[keyof typeof BasicToastColors];

export type ToastColorType = BasicToastColorsNamesType | EmotionColorNamesType;

export interface BaseToastProps extends ChildrenProps, StyleProps {}

export interface SpiritToastProps extends BaseToastProps {
  alignmentX?: AlignmentXDictionaryType | { [key: string]: AlignmentXDictionaryType };
  alignmentY?: Omit<AlignmentYDictionaryType, 'center'> | { [key: string]: Omit<AlignmentYDictionaryType, 'center'> };
  isCollapsible?: boolean;
}

export interface BaseToastBarProps extends ChildrenProps, StyleProps {
  closeLabel?: string;
  color?: ToastColorType;
  hasIcon?: boolean;
  iconName?: string;
}

export interface ToastBarHandlingProps {
  isDismissible?: boolean;
  isOpen?: boolean;
  onClose?: () => void;
}

export interface ToastBarProps extends BaseToastBarProps, ToastBarHandlingProps {}

export interface TransitionToastBarProps {
  transitionDuration?: number;
}

export interface SpiritToastBarProps extends ToastBarProps, TransitionToastBarProps {
  id: string;
}

export interface ToastLinkProps<E extends ElementType = 'a'> extends ToastBarHandlingProps, ToastBarProps {
  elementType?: E;
  href?: string;
  target?: LinkTarget;
}

export interface ToastCloseButtonProps extends ToastBarHandlingProps, SpiritToastBarProps {
  label?: string;
}

export interface UncontrolledToastProps extends ChildrenProps, StyleProps {
  alignmentX?: 'left' | 'center' | 'right';
  alignmentY?: 'top' | 'bottom';
  closeLabel?: string;
  isCollapsible?: boolean;
}
