import React, { useState } from 'react';
import { Icon } from '../../Icon';
import { Tooltip, TooltipPopover, TooltipTrigger } from '..';

const TooltipIcon = () => {
  const [openIcon, setOpenIcon] = useState(false);

  return (
    <div>
      Hover or click on the icon to view the tooltip{' '}
      <Tooltip
        flipFallbackPlacements={['top-start', 'bottom-start', 'left']}
        id="tooltip-example-with-icon"
        isDismissible
        isOpen={openIcon}
        onToggle={setOpenIcon}
        placement="right"
        UNSAFE_className="d-inline-block"
      >
        <TooltipTrigger boxSize={16} elementType={Icon} name="info" UNSAFE_className="d-inline-block" />
        <TooltipPopover>Close me</TooltipPopover>
      </Tooltip>
    </div>
  );
};

export default TooltipIcon;
