import { LegacyRef, ReactNode } from 'react';
import { Booleanish, ChildrenProps, ClickEvent, StyleProps } from './shared';

export const DropdownPlacements = {
  BOTTOM_LEFT: 'bottom-left',
  BOTTOM_RIGHT: 'bottom-right',
  TOP_LEFT: 'top-left',
  TOP_RIGHT: 'top-right',
} as const;

export const DropdownBreakpoints = {
  MOBILE: 'mobile',
  TABLET: 'tablet',
  DESKTOP: 'desktop',
} as const;

export type DropdownPlacementKeys = keyof typeof DropdownPlacements;
export type DropdownPlacement = typeof DropdownPlacements[DropdownPlacementKeys];

export type DropdownBreakpointKeys = keyof typeof DropdownBreakpoints;
export type DropdownBreakpoint = typeof DropdownBreakpoints[DropdownBreakpointKeys];

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
  isFullWidth?: boolean;
  placement?: DropdownPlacement;
  breakpoint?: DropdownBreakpoint;
}
