import classNames from 'classnames';
import React, { LegacyRef, forwardRef, useMemo } from 'react';
import { useStyleProps } from '../../hooks';
import { SpiritTooltipProps } from '../../types';
import TooltipCloseButton from './TooltipCloseButton';
import { useTooltipStyleProps } from './useTooltipStyleProps';

export const Tooltip = forwardRef((props: SpiritTooltipProps, ref) => {
  const {
    arrowRef,
    children,
    isDismissible,
    closeLabel = 'Close',
    open,
    onClose,
    placement = 'bottom',
    ...restProps
  } = props;

  const { classProps, props: modifiedProps } = useTooltipStyleProps({
    isDismissible,
    open,
    ...restProps,
  });
  const { styleProps, props: transferProps } = useStyleProps({ ...modifiedProps });
  const renderCloseButton = useMemo(
    () => isDismissible && <TooltipCloseButton onClick={onClose} label={closeLabel} />,
    [isDismissible, onClose, closeLabel],
  );

  return (
    <div
      className={classNames(classProps.rootClassName, styleProps.className)}
      style={styleProps.style}
      ref={ref as LegacyRef<HTMLDivElement> | undefined}
      {...transferProps}
      data-spirit-placement={placement}
    >
      {children}
      {renderCloseButton}
      <span
        ref={arrowRef as LegacyRef<HTMLDivElement> | undefined}
        className={classProps.arrowClassName}
        data-spirit-element="arrow"
      />
    </div>
  );
});

export default Tooltip;
