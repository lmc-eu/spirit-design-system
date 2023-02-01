import React, { useMemo, forwardRef, LegacyRef } from 'react';
import classNames from 'classnames';
import { useStyleProps } from '../../hooks';
import { SpiritTooltipProps } from '../../types';
import TooltipCloseButton from './TooltipCloseButton';
import { useTooltipStyleProps } from './useTooltipStyleProps';

const Tooltip = forwardRef((props: SpiritTooltipProps, ref) => {
  const { children, isDismissible, closeLabel = 'Close', open, onClose, ...restProps } = props;

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
    >
      {children}
      {renderCloseButton}
      <span className={classProps.arrowClassName} />
    </div>
  );
});

export default Tooltip;
