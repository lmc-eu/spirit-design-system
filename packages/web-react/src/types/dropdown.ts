import { LegacyRef, ReactNode } from 'react';
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
  id?: string;
  renderTrigger?: (render: DropdownRenderProps) => ReactNode;
}

export interface SpiritDropdownProps extends DropdownProps {
  enableAutoClose?: boolean;
  placement?: PlacementDictionaryType;
  fullWidthMode?: DropdownFullWidthMode;
  onAutoClose?: (event: Event) => void;
}
