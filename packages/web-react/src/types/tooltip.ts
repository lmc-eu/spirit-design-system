import { Placement } from '@floating-ui/react';
import { ChildrenProps, ClickEvent, StyleProps } from './shared';

export const TOOLTIP_TRIGGER = {
  CLICK: 'click',
  HOVER: 'hover',
  MANUAL: 'manual',
  OUTSIDE_PRESS: 'outside-press',
  ESCAPE_KEY: 'escape-key',
} as const;

export type TooltipTriggerType = 'click' | 'hover' | 'manual';

export interface UncontrolledTooltipProps extends BaseTooltipProps {}

export interface TooltipCloseButtonProps extends StyleProps {
  onClick?: (event: ClickEvent) => void;
  label?: string;
}

export interface TooltipHandlingProps {
  isOpen?: boolean;
  onToggle: (isOpen: boolean) => void;
}

export interface BaseTooltipProps extends ChildrenProps, StyleProps {
  closeLabel?: string;
  id: string;
  isDismissible?: boolean;
  placement?: Placement;
}

export interface TooltipProps extends BaseTooltipProps, TooltipHandlingProps {}

export interface SpiritTooltipProps extends TooltipProps, ChildrenProps {
  enableFlipping?: boolean;
  enableFlippingCrossAxis?: boolean;
  enableShifting?: boolean;
  enableSizing?: boolean;
  flipFallbackAxisSideDirection?: 'none' | 'start' | 'end';
  flipFallbackPlacements?: Placement | Placement[];
  isFocusableOnHover?: boolean;
  trigger?: TooltipTriggerType[];
}
