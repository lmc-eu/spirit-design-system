import React, { useState } from 'react';
import { Icon } from '../../Icon';
import { TooltipModern, TooltipPopover, TooltipTrigger } from '../../Tooltip';

const TooltipIcon = () => {
  const [openIcon, setOpenIcon] = useState(false);

  return (
    <div>
      Click on the icon to show the tooltip:{' '}
      <TooltipModern
        id="tooltip-example-with-icon"
        isOpen={openIcon}
        onToggle={setOpenIcon}
        placement="right"
        flipFallbackPlacements={['top-start', 'bottom-start', 'left']}
        UNSAFE_className="d-inline-block"
        isDismissible
      >
        <TooltipTrigger
          elementType={Icon}
          name="info"
          boxSize={16}
          UNSAFE_className="d-inline-block"
          marginBottom="space-200"
        />
        <TooltipPopover>Close me</TooltipPopover>
      </TooltipModern>
    </div>
  );
};

export default TooltipIcon;
