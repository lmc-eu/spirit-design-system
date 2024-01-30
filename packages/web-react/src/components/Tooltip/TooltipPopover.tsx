import classNames from 'classnames';
import React, { useMemo } from 'react';
import { useStyleProps } from '../../hooks';
import { ChildrenProps, StyleProps } from '../../types';
import TooltipCloseButton from './TooltipCloseButton';
import { useTooltipContext } from './TooltipContext';
import { useTooltipModernStyleProps } from './useTooltipModernStyleProps';

interface TooltipPopoverProps extends ChildrenProps, StyleProps {}

const TooltipPopover = (props: TooltipPopoverProps) => {
  const { children, ...rest } = props;
  const {
    arrowRef,
    getFloatingProps,
    isDismissible,
    isOpen,
    middlewareData,
    onToggle,
    placement,
    tooltipRef,
    x,
    y,
    sizeMaxWidth,
    tooltipMaxWidth,
  } = useTooltipContext();
  const { classProps, props: modifiedProps } = useTooltipModernStyleProps({
    isOpen,
    isDismissible,
    placement,
    ...rest,
  });
  const { styleProps: contentStyleProps, props: contentOtherProps } = useStyleProps({ ...modifiedProps });

  const renderCloseButton = useMemo(
    () => isDismissible && <TooltipCloseButton onClick={() => onToggle(false)} label="close" />,
    [isDismissible, onToggle],
  );

  const getMaxHeightAndWidth = () => {
    if (isOpen && sizeMaxWidth && tooltipMaxWidth) {
      return {
        maxWidth: tooltipMaxWidth < sizeMaxWidth ? tooltipMaxWidth : sizeMaxWidth,
      };
    }

    return undefined;
  };

  const getArrowStaticSidePosition = () => {
    if (placement && arrowRef.current) {
      const { arrow } = middlewareData;
      const side = placement.split('-')[0];

      const staticSide = {
        top: 'bottom',
        right: 'left',
        bottom: 'top',
        left: 'right',
      }[side] as string;

      const arrowEl = arrowRef.current as HTMLElement;

      const offset =
        staticSide === 'top' || staticSide === 'bottom'
          ? arrowEl.offsetHeight
          : (arrowEl.offsetHeight + arrowEl.offsetWidth) / 2;

      return {
        left: arrow?.x,
        top: arrow?.y,
        [staticSide]: -offset,
      };
    }

    return undefined;
  };

  return (
    <div
      ref={tooltipRef}
      className={classNames(classProps.rootClassName, contentStyleProps.className)}
      {...contentOtherProps}
      {...getFloatingProps()}
      style={{
        top: y ?? 0,
        left: x ?? 0,
        ...getMaxHeightAndWidth(),
        ...contentStyleProps.style,
      }}
      data-spirit-element="tooltip" // This is used to select CSS variables for maxWidth and tooltip offset
      data-spirit-placement={placement} // This attribute is used by the CSS to position the arrow
      data-spirit-placement-controlled // This attribute is used by the CSS to position the arrow
    >
      {children}
      {renderCloseButton}
      <span
        ref={arrowRef}
        className={classProps.arrowClassName}
        data-spirit-element="tooltip-arrow"
        style={{
          position: 'absolute',
          ...getArrowStaticSidePosition(),
        }}
      />
    </div>
  );
};

export default TooltipPopover;
