import { Placement } from '@floating-ui/react';
import { ChildrenProps, PlacementDictionaryType, StyleProps, ClickEvent } from './shared';

export interface TooltipHandlingProps {
  open?: boolean | undefined;
  onClose?: (event: ClickEvent) => void;
}

export interface BaseTooltipProps extends ChildrenProps, StyleProps {
  closeLabel?: string;
  id?: string;
  isDismissible?: boolean;
  placement?: PlacementDictionaryType | 'off';
}

export interface TooltipWrapperProps extends ChildrenProps, StyleProps {}

export interface TooltipCloseButtonProps extends StyleProps {
  onClick?: (event: ClickEvent) => void;
  label?: string;
}

export interface TooltipProps extends BaseTooltipProps, TooltipHandlingProps {}

export interface UncontrolledTooltipProps extends BaseTooltipProps {}

export interface SpiritTooltipProps extends TooltipProps {}

// TooltipModern types
export interface TooltipModernHandlingProps {
  isOpen?: boolean;
  onToggle: (isOpen: boolean) => void;
}

export interface BaseTooltipModernProps extends ChildrenProps, StyleProps {
  closeLabel?: string;
  id: string;
  isDismissible?: boolean;
  placement?: Placement;
}

export interface TooltipModernProps extends BaseTooltipModernProps, TooltipModernHandlingProps {}

export interface SpiritTooltipModernProps extends TooltipModernProps, ChildrenProps {
  enableFlipping?: boolean;
  enableFlippingCrossAxis?: boolean;
  enableShifting?: boolean;
  enableSizing?: boolean;
  enableHover?: boolean;
  flipFallbackAxisSideDirection?: 'none' | 'start' | 'end';
  flipFallbackPlacements?: Placement | Placement[];
}
