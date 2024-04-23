import { LegacyRef } from 'react';
import { Booleanish, ChildrenProps, ClickEvent, PlacementDictionaryType, StyleProps } from './shared';

export const DropdownFullWidthModes = {
  OFF: 'off',
  MOBILE_ONLY: 'mobile-only',
  ALL: 'all',
} as const;

export type DropdownFullWidthModeKeys = keyof typeof DropdownFullWidthModes;
export type DropdownFullWidthMode = (typeof DropdownFullWidthModes)[DropdownFullWidthModeKeys];

export type DropdownTriggerProps = {
  onClick: (event: ClickEvent) => void;
  className?: string | undefined;
  'aria-expanded': Booleanish;
  'aria-controls': string;
  ref: LegacyRef<HTMLButtonElement & HTMLAnchorElement>;
};

export type DropdownRenderProps = {
  isOpen: boolean;
  trigger: DropdownTriggerProps;
};

export interface DropdownProps extends ChildrenProps, StyleProps {
  id: string;
}

export interface DropdownStyleProps extends StyleProps {
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
