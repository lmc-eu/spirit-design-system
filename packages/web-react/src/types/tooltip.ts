import { Placement, Strategy } from '@floating-ui/react';
import type { ElementType, JSXElementConstructor, ReactNode } from 'react';
import type {
  ChildrenProps,
  ClickEvent,
  ElementTypeProp,
  SpiritPolymorphicElementPropsWithRef,
  StyleProps,
  TransferProps,
} from './shared';

export const TOOLTIP_TRIGGER = {
  CLICK: 'click',
  HOVER: 'hover',
  MANUAL: 'manual',
  OUTSIDE_PRESS: 'outside-press',
  ESCAPE_KEY: 'escape-key',
} as const;

export interface TooltipPopoverProps extends ChildrenProps, StyleProps {}

export type TooltipTriggerType = 'click' | 'hover' | 'manual';

export interface TooltipTriggerProps extends StyleProps, TransferProps {
  elementType?: ElementTypeProp;
  children?: string | ReactNode | ((props: { isOpen: boolean }) => ReactNode);
}

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

export interface TooltipProps<E extends ElementType> extends BaseTooltipProps, TooltipHandlingProps {
  /**
   * The HTML element or React element used to render the plan, e.g. 'div', 'a', or `RouterLink`.
   *
   * @default 'div'
   */
  elementType?: E | JSXElementConstructor<unknown>;
}

export type SpiritTooltipProps<E extends ElementType = 'div'> = TooltipProps<E> &
  SpiritPolymorphicElementPropsWithRef<E, TooltipProps<E>> &
  ChildrenProps & {
    enableFlipping?: boolean;
    enableFlippingCrossAxis?: boolean;
    enableShifting?: boolean;
    enableSizing?: boolean;
    flipFallbackAxisSideDirection?: 'none' | 'start' | 'end';
    flipFallbackPlacements?: Placement | Placement[];
    isFocusableOnHover?: boolean;
    positionStrategy?: Strategy;
    trigger?: TooltipTriggerType[];
  };
