import { ComponentPropsWithRef, ElementType, LegacyRef, ReactNode } from 'react';
import {
  AlignmentXExtendedDictionaryType,
  AlignmentYExtendedDictionaryType,
  Booleanish,
  ChildrenProps,
  ClickEvent,
  PlacementDictionaryType,
  StyleProps,
} from './shared';

export const DropdownFullWidthModes = {
  OFF: 'off',
  MOBILE_ONLY: 'mobile-only',
  ALL: 'all',
} as const;

export type DropdownFullWidthModeKeys = keyof typeof DropdownFullWidthModes;
export type DropdownFullWidthMode = (typeof DropdownFullWidthModes)[DropdownFullWidthModeKeys];

export type DropdownTriggerRenderProps = {
  onClick: (event: ClickEvent) => void;
  className?: string | undefined;
  'aria-expanded': Booleanish;
  'aria-controls': string;
  ref: LegacyRef<HTMLButtonElement & HTMLAnchorElement>;
};

export type DropdownAlignmentXType =
  | AlignmentXExtendedDictionaryType
  | { [key: string]: AlignmentXExtendedDictionaryType };
export type DropdownAlignmentYType =
  | AlignmentYExtendedDictionaryType
  | { [key: string]: AlignmentYExtendedDictionaryType };

export interface DropdownAlignmentProps {
  alignmentX?: DropdownAlignmentXType;
  alignmentY?: DropdownAlignmentYType;
}

export interface DropdownProps extends DropdownAlignmentProps, ChildrenProps, StyleProps {
  id: string;
}

export interface DropdownStyleProps extends DropdownAlignmentProps, StyleProps {
  isOpen?: boolean;
}

export interface SpiritDropdownProps extends DropdownProps, ChildrenProps {
  enableAutoClose?: boolean;
  placement?: PlacementDictionaryType;
  fullWidthMode?: DropdownFullWidthMode;
  onAutoClose?: (event: Event) => void;
  isOpen: boolean;
  onToggle: () => void;
}

export interface UncontrolledDropdownProps extends ChildrenProps, Omit<SpiritDropdownProps, 'isOpen' | 'onToggle'> {}

export type DropdownTriggerProps<E extends ElementType> = {
  elementType?: E;
  children: string | ReactNode | ((props: { isOpen: boolean }) => ReactNode);
} & ComponentPropsWithRef<E> &
  StyleProps;
