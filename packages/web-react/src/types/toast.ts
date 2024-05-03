import {
  AlignmentXDictionaryType,
  AlignmentYDictionaryType,
  ChildrenProps,
  EmotionColorsDictionaryType,
  StyleProps,
} from './shared';

export type ToastColorType = 'inverted' | EmotionColorsDictionaryType;

export interface BaseToastProps extends ChildrenProps, StyleProps {}

export interface SpiritToastProps extends BaseToastProps {
  alignmentX?: AlignmentXDictionaryType | { [key: string]: AlignmentXDictionaryType };
  alignmentY?: Omit<AlignmentYDictionaryType, 'center'> | { [key: string]: Omit<AlignmentYDictionaryType, 'center'> };
  isCollapsible?: boolean;
}

export interface BaseToastBarProps extends ChildrenProps, StyleProps {
  id: string;
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
  closeLabel?: string;
  color?: ToastColorType;
  hasIcon?: boolean;
  iconName?: string;
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
