import React, { useRef } from 'react';
import { useDeprecationMessage, useStyleProps } from '../../hooks';
import { ChildrenProps, SpiritTooltipModernProps } from '../../types';
import { TooltipProvider } from './TooltipContext';
import { useFloating } from './useFloating';

interface TooltipModernProps extends ChildrenProps, SpiritTooltipModernProps {}

const TooltipModern = (props: TooltipModernProps) => {
  const {
    children,
    enableFlipping: flipProp = true,
    enableShifting: shiftProp = true,
    enableSizing: sizeProp = false,
    enableFlippingCrossAxis: flipCrossAxis = true,
    flipFallbackAxisSideDirection = 'none',
    flipFallbackPlacements = ['bottom', 'top'],
    id,
    isDismissible = false,
    isOpen = false,
    onToggle,
    placement: tooltipPlacement,
    ...rest
  } = props;

  const { styleProps, props: otherProps } = useStyleProps({ ...rest });

  // Refs for FloatingUI
  const arrowRef = useRef<HTMLSpanElement>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);

  // Get `maxWidth` and `--tooltip-offset` from CSS variables
  let tooltipMaxWidth;
  let tooltipOffset;
  const tooltipElement = tooltipRef.current?.querySelector('[data-spirit-element="tooltip"]');

  if (tooltipElement) {
    const tooltipComputedStyle = window.getComputedStyle(tooltipElement);
    tooltipMaxWidth = parseInt(tooltipComputedStyle.getPropertyValue('--tooltip-max-width'), 10);
    tooltipOffset = parseInt(tooltipComputedStyle.getPropertyValue('--tooltip-offset'), 10);
  }

  // Get props for the FloatingUI hook
  const { getFloatingProps, getReferenceProps, maxWidth, middlewareData, placement, refs, x, y } = useFloating({
    arrowRef,
    flipCrossAxis,
    flipFallbackAxisSideDirection,
    flipFallbackPlacements,
    flipProp,
    isOpen,
    offset: tooltipOffset,
    onToggle,
    shiftProp,
    sizeProp,
    tooltipMaxWidth,
    tooltipPlacement,
  });

  useDeprecationMessage({
    method: 'component',
    trigger: true,
    componentName: 'TooltipModern',
    componentProps: {
      newName: 'Tooltip',
    },
  });

  return (
    <TooltipProvider
      value={{
        anchorRef: refs.setPositionReference,
        arrowRef,
        getFloatingProps,
        getReferenceProps,
        id,
        isDismissible,
        isOpen,
        middlewareData,
        onToggle,
        placement,
        sizeMaxWidth: maxWidth,
        tooltipMaxWidth,
        tooltipRef: refs.setFloating,
        triggerRef: refs.setReference,
        x,
        y,
      }}
    >
      <div ref={tooltipRef} {...styleProps} {...otherProps}>
        {children}
      </div>
    </TooltipProvider>
  );
};

export default TooltipModern;
