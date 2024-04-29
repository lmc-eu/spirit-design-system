import React, { useState } from 'react';
import { Icon } from '../../Icon';
import { Tooltip, TooltipPopover, TooltipTrigger } from '..';

const TooltipIcon = () => {
  const [openIcon, setOpenIcon] = useState(false);

  return (
    <div>
      <p>
        Hover or click on the icon on the right to view the tooltip{' '}
        <Tooltip
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
        </Tooltip>
      </p>
    </div>
  );
};

export default TooltipIcon;
