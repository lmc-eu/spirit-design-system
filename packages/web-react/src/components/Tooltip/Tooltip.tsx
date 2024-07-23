import classNames from 'classnames';
import React, { useRef } from 'react';
import { useStyleProps } from '../../hooks';
import { SpiritTooltipProps } from '../../types';
import { TooltipProvider } from './TooltipContext';
import { useFloating } from './useFloating';
import { useTooltipStyleProps } from './useTooltipStyleProps';

const Tooltip = (props: SpiritTooltipProps) => {
  const {
    children,
    enableFlipping: flipProp = true,
    enableFlippingCrossAxis: flipCrossAxis = true,
    enableShifting: shiftProp = true,
    enableSizing: sizeProp = true,
    flipFallbackAxisSideDirection = 'none',
    flipFallbackPlacements = ['bottom', 'top'],
    id,
    isDismissible = false,
    isFocusableOnHover = false,
    isOpen = false,
    onToggle,
    placement: tooltipPlacement,
    positionStrategy = 'absolute',
    trigger = ['click', 'hover'],
    ...restProps
  } = props;

  const { classProps, props: modifiedProps } = useTooltipStyleProps({
    isDismissible,
    isOpen,
    ...restProps,
  });
  const { styleProps, props: otherProps } = useStyleProps(modifiedProps);

  // Refs for FloatingUI
  const arrowRef = useRef<HTMLSpanElement>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);

  // Get `--tooltip-max-width` and `--tooltip-offset` from CSS variables
  let tooltipMaxWidth;
  let tooltipOffset;
  let tooltipCornerOffset;
  let tooltipArrowWidth;
  const tooltipElement = tooltipRef.current?.querySelector('[data-spirit-element="tooltip"]');
  const tooltipArrowElement = tooltipElement?.querySelector('[data-spirit-element="tooltip-arrow"]');

  if (tooltipElement) {
    const tooltipComputedStyle = window.getComputedStyle(tooltipElement);
    const tooltipArrowComputedStyle = tooltipArrowElement && window.getComputedStyle(tooltipArrowElement);
    tooltipMaxWidth = parseInt(tooltipComputedStyle.getPropertyValue('--tooltip-max-width'), 10);
    tooltipOffset = parseInt(tooltipComputedStyle.getPropertyValue('--tooltip-offset'), 10);
    tooltipCornerOffset = tooltipArrowComputedStyle
      ? parseInt(tooltipArrowComputedStyle.getPropertyValue('--tooltip-arrow-corner-offset'), 10)
      : 0;
    tooltipArrowWidth = tooltipArrowComputedStyle ? parseInt(tooltipArrowComputedStyle.width, 10) : 0;
  }

  // Get props for the FloatingUI hook
  const { getFloatingProps, getReferenceProps, maxWidth, middlewareData, placement, refs, x, y, position } =
    useFloating({
      arrowRef,
      cornerOffset: tooltipCornerOffset,
      flipCrossAxis,
      flipFallbackAxisSideDirection,
      flipFallbackPlacements,
      flipProp,
      isDismissible,
      isFocusableOnHover,
      isOpen,
      offset: tooltipOffset,
      onToggle,
      shiftProp,
      sizeProp,
      positionStrategy,
      tooltipArrowWidth,
      tooltipMaxWidth,
      tooltipPlacement,
      trigger,
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
        position,
      }}
    >
      <div
        {...otherProps}
        ref={tooltipRef}
        className={classNames(classProps.rootClassName, styleProps.className)}
        style={styleProps.style}
      >
        {children}
      </div>
    </TooltipProvider>
  );
};

export default Tooltip;
