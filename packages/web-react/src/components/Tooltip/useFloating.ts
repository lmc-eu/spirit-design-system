'use client';

import {
  type Placement,
  type Strategy,
  arrow,
  autoUpdate,
  flip,
  inline,
  limitShift,
  offset,
  safePolygon,
  shift,
  size,
  useClick,
  useDismiss,
  useFloating as useFloatingUI,
  useFocus,
  useHover,
  useInteractions,
  useRole,
} from '@floating-ui/react';
import { type HTMLProps, type MouseEvent, type MouseEventHandler, type MutableRefObject, useState } from 'react';
import { TOOLTIP_TRIGGER, type TooltipTriggerType } from '../../types';

type UseTooltipUIProps = {
  arrowRef: MutableRefObject<HTMLElement | null>;
  cornerOffset?: number;
  flipCrossAxis: boolean;
  flipFallbackAxisSideDirection: 'none' | 'start' | 'end';
  flipFallbackPlacements?: Placement | Placement[];
  flipProp: boolean;
  isDismissible: boolean;
  isOpen?: boolean;
  offset?: number;
  onToggle: (isOpen: boolean) => void;
  isFocusableOnHover?: boolean;
  shiftProp: boolean;
  sizeProp: boolean;
  positionStrategy?: Strategy;
  tooltipArrowWidth?: number;
  tooltipMaxWidth?: number;
  tooltipPlacement?: Placement;
  trigger?: TooltipTriggerType[];
};

// Convert a string or array of strings to an array of strings (for placements)
const stringToArray = (value: Placement | Placement[]): Placement[] | undefined =>
  Array.isArray(value) ? value : [value];

export const useFloating = (props: UseTooltipUIProps) => {
  const {
    arrowRef,
    cornerOffset = 0,
    flipCrossAxis,
    flipFallbackAxisSideDirection = 'none',
    flipFallbackPlacements,
    flipProp,
    isDismissible,
    isOpen = false,
    offset: tooltipOffset = 0,
    onToggle,
    isFocusableOnHover,
    shiftProp,
    sizeProp,
    positionStrategy = 'absolute',
    tooltipArrowWidth = 0,
    tooltipPlacement,
    trigger,
  } = props;

  const [maxWidth, setMaxWidth] = useState<number | undefined>(undefined);
  const [isClicked, setIsClicked] = useState(false);
  const mainAxisOffset = cornerOffset + tooltipArrowWidth;

  const isHoverEnabled = trigger?.includes(TOOLTIP_TRIGGER.HOVER);
  const isClickEnabled = trigger?.includes(TOOLTIP_TRIGGER.CLICK);
  const isFocusEnabled = trigger?.includes(TOOLTIP_TRIGGER.FOCUS);

  const useSafePolygons = (isClickable: boolean) =>
    isClickable
      ? safePolygon({
          requireIntent: false,
        })
      : undefined;

  // Floating UI library settings
  const { x, y, floatingStyles, refs, context, placement, middlewareData } = useFloatingUI({
    open: isOpen,
    onOpenChange: (open, event, reason) => {
      if (isHoverEnabled) {
        // if tooltip is opened by click, do not close until clicked again or outside press or escape key
        if (reason === TOOLTIP_TRIGGER.CLICK) {
          setIsClicked((prev) => !prev);
        }
        if (isOpen && isClicked && reason === TOOLTIP_TRIGGER.HOVER) {
          return;
        }
        if (
          isOpen &&
          isClicked &&
          (reason === TOOLTIP_TRIGGER.CLICK ||
            reason === TOOLTIP_TRIGGER.OUTSIDE_PRESS ||
            reason === TOOLTIP_TRIGGER.ESCAPE_KEY)
        ) {
          setIsClicked(false);
          onToggle(false);

          return;
        }
      }

      onToggle(open);
    },
    placement: tooltipPlacement,
    whileElementsMounted: autoUpdate,
    middleware: [
      // order matters for correct behavior, please don't sort by alphabet or change order!
      offset(tooltipOffset), // offset from CSS variable (--tooltip-offset)
      inline(),
      flipProp &&
        flip({
          crossAxis: flipCrossAxis,
          fallbackPlacements: flipFallbackPlacements ? stringToArray(flipFallbackPlacements) : undefined,
          fallbackAxisSideDirection: flipFallbackAxisSideDirection,
        }),
      shiftProp &&
        shift({
          limiter: limitShift({
            offset: () => ({
              mainAxis: mainAxisOffset,
            }),
          }),
        }),
      sizeProp &&
        size({
          apply({ availableWidth }: { availableWidth: number }) {
            setMaxWidth(availableWidth);
          },
        }),
      arrow({ element: arrowRef.current, padding: cornerOffset }), // should be the last middleware
    ],
    strategy: positionStrategy,
  });

  // Floating UI library interaction hooks
  const click = useClick(context, { enabled: isClickEnabled });
  const hover = useHover(context, {
    enabled: isHoverEnabled,
    handleClose: useSafePolygons(!!isFocusableOnHover),
  });
  const focus = useFocus(context, { enabled: isFocusEnabled });
  const dismiss = useDismiss(context, { outsidePress: !isDismissible });
  const role = useRole(context, { role: 'tooltip' });
  const { getReferenceProps: originalGetReferenceProps, getFloatingProps } = useInteractions([
    click,
    hover,
    focus,
    dismiss,
    role,
  ]);

  // Wrap getReferenceProps to ensure clicking focuses the element when focus trigger is enabled
  // This matches the web JS behavior where clicking a focusable element naturally focuses it
  const getReferenceProps = (userProps?: HTMLProps<Element>) => {
    const referenceProps = originalGetReferenceProps(userProps);

    if (isFocusEnabled) {
      const originalOnMouseDown = referenceProps.onMouseDown as ((event: MouseEvent<Element>) => void) | undefined;

      referenceProps.onMouseDown = ((event: MouseEvent<Element>) => {
        if (originalOnMouseDown) {
          originalOnMouseDown(event);
        }

        const element = event.currentTarget;

        if (element && element !== document.activeElement) {
          const isFocusable =
            element instanceof HTMLElement &&
            (element.tabIndex >= 0 ||
              element instanceof HTMLButtonElement ||
              element instanceof HTMLAnchorElement ||
              element instanceof HTMLInputElement ||
              element instanceof HTMLSelectElement ||
              element instanceof HTMLTextAreaElement);

          if (isFocusable) {
            (element as HTMLElement).focus();
          }
        }
      }) as MouseEventHandler<Element>;
    }

    return referenceProps;
  };

  return {
    context,
    getFloatingProps,
    getReferenceProps,
    maxWidth,
    middlewareData,
    placement,
    refs,
    x,
    y,
    position: floatingStyles.position as Strategy,
  };
};
