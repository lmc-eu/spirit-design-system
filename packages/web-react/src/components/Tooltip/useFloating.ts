import {
  Placement,
  arrow,
  autoUpdate,
  flip,
  inline,
  limitShift,
  offset,
  shift,
  size,
  useClick,
  useDismiss,
  useFloating as useFloatingUI,
  useHover,
  useInteractions,
  useRole,
} from '@floating-ui/react';
import { useState } from 'react';
import { TooltipTriggerType, TOOLTIP_TRIGGER } from '../../types';

type UseTooltipUIProps = {
  arrowRef: React.MutableRefObject<HTMLElement | null>;
  cornerOffset?: number;
  flipCrossAxis: boolean;
  flipFallbackAxisSideDirection: 'none' | 'start' | 'end';
  flipFallbackPlacements?: Placement | Placement[];
  flipProp: boolean;
  isOpen?: boolean;
  offset?: number;
  onToggle: (isOpen: boolean) => void;
  shiftProp: boolean;
  sizeProp: boolean;
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
    isOpen = false,
    offset: tooltipOffset = 0,
    onToggle,
    shiftProp,
    sizeProp,
    tooltipArrowWidth = 0,
    tooltipPlacement,
    trigger,
  } = props;

  const [maxWidth, setMaxWidth] = useState<number | undefined>(undefined);
  const [isClicked, setIsClicked] = useState(false);
  const mainAxisOffset = cornerOffset + tooltipArrowWidth;

  const isHoverEnabled = trigger?.includes(TOOLTIP_TRIGGER.HOVER);
  const isClickEnabled = trigger?.includes(TOOLTIP_TRIGGER.CLICK);

  // Floating UI library settings
  const { x, y, refs, context, placement, middlewareData } = useFloatingUI({
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
  });

  // Floating UI library interaction hooks
  const click = useClick(context, { enabled: isClickEnabled });
  const hover = useHover(context, { enabled: isHoverEnabled });
  const dismiss = useDismiss(context);
  const role = useRole(context, { role: 'tooltip' });
  const { getReferenceProps, getFloatingProps } = useInteractions([click, hover, dismiss, role]);

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
  };
};
