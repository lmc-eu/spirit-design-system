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
  useFloating as useFloatingUI,
  useInteractions,
  useRole,
} from '@floating-ui/react';
import { useState } from 'react';

type UseTooltipUIProps = {
  arrowRef: React.MutableRefObject<HTMLElement | null>;
  flipProp: boolean;
  flipCrossAxis: boolean;
  flipFallbackAxisSideDirection: 'none' | 'start' | 'end';
  flipFallbackPlacements?: Placement | Placement[];
  isOpen?: boolean;
  onToggle: (isOpen: boolean) => void;
  tooltipPlacement?: Placement;
  shiftProp: boolean;
  sizeProp: boolean;
  offset?: number;
  tooltipMaxWidth?: number;
};

// Convert a string or array of strings to an array of strings (for placements)
const stringToArray = (value: Placement | Placement[]): Placement[] | undefined =>
  Array.isArray(value) ? value : [value];

export const useFloating = (props: UseTooltipUIProps) => {
  const {
    arrowRef,
    flipCrossAxis,
    flipFallbackAxisSideDirection = 'none',
    flipFallbackPlacements,
    flipProp,
    isOpen = false,
    offset: tooltipOffset = 0,
    onToggle,
    shiftProp,
    sizeProp,
    tooltipPlacement,
  } = props;

  const [maxWidth, setMaxWidth] = useState<number | undefined>(undefined);

  // Floating UI library settings
  const { x, y, refs, context, placement, middlewareData } = useFloatingUI({
    open: isOpen,
    onOpenChange: onToggle,
    placement: tooltipPlacement,
    whileElementsMounted: autoUpdate,
    middleware: [
      offset(tooltipOffset), // offset from CSS variable (--tooltip-offset)
      inline(),
      flipProp &&
        flip({
          crossAxis: flipCrossAxis,
          fallbackPlacements: flipFallbackPlacements ? stringToArray(flipFallbackPlacements) : undefined,
          fallbackAxisSideDirection: flipFallbackAxisSideDirection,
        }),
      sizeProp &&
        size({
          apply({ availableWidth }: { availableWidth: number }) {
            setMaxWidth(availableWidth);
          },
        }),
      shiftProp &&
        shift({
          limiter: limitShift(),
        }),
      arrow({ element: arrowRef.current }), // should be last middleware
    ],
  });

  // Floating UI library interaction hooks
  const click = useClick(context);
  const role = useRole(context, { role: 'tooltip' });
  const { getReferenceProps, getFloatingProps } = useInteractions([click, role]);

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
