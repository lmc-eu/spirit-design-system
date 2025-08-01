'use client';

import React, { type ElementType, useRef } from 'react';
import { useStyleProps } from '../../hooks';
import { SpiritTooltipProps } from '../../types';
import { mergeStyleProps } from '../../utils';
import { TooltipProvider } from './TooltipContext';
import { useFloating } from './useFloating';
import { useTooltipStyleProps } from './useTooltipStyleProps';

const Tooltip = <T extends ElementType = 'div'>(props: SpiritTooltipProps<T>) => {
  const {
    children,
    elementType: ElementTag = 'div',
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
  const mergedStyleProps = mergeStyleProps(ElementTag, {
    classProps: classProps.rootClassName,
    styleProps,
  });

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
      <ElementTag {...otherProps} ref={tooltipRef} {...mergedStyleProps}>
        {children}
      </ElementTag>
    </TooltipProvider>
  );
};

Tooltip.spiritComponent = 'Tooltip';

export default Tooltip;
