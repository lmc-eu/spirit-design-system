import { ChildrenProps, StyleProps, ClickEvent } from './shared';

export interface TooltipHandlingProps {
  open?: boolean | undefined;
  onClose?: (event: ClickEvent) => void;
}

export interface BaseTooltipProps extends ChildrenProps, StyleProps {
  closeLabel?: string;
  id?: string;
  isDismissible?: boolean;
  placement?: 'top' | 'right' | 'bottom' | 'left' | 'off';
}

export interface TooltipWrapperProps extends ChildrenProps, StyleProps {}

export interface TooltipCloseButtonProps extends StyleProps {
  onClick?: (event: ClickEvent) => void;
  label?: string;
}

export interface TooltipProps extends BaseTooltipProps, TooltipHandlingProps {}

export interface UncontrolledTooltipProps extends BaseTooltipProps {}

export interface SpiritTooltipProps extends TooltipProps {}
