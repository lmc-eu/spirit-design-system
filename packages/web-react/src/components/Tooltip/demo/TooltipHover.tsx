import React, { useState } from 'react';
import { Button } from '../../Button';
import { Tooltip, TooltipPopover, TooltipTrigger } from '..';

const TooltipHover = () => {
  const [open, setOpen] = useState(false);

  return (
    <Tooltip
      id="tooltip-on-hover-floating-ui"
      isOpen={open}
      onToggle={setOpen}
      placement="right"
      flipFallbackPlacements={['left', 'top-start', 'bottom-start']}
      trigger={['hover']}
      isFocusableOnHover
    >
      <TooltipTrigger elementType={Button}>I have a tooltip 😎</TooltipTrigger>
      <TooltipPopover>
        Hello there! <br />
        <a href="#" className="link-inverted">
          Click me
        </a>
      </TooltipPopover>
    </Tooltip>
  );
};

export default TooltipHover;
