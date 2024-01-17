import React, { useState } from 'react';
import { Button } from '../../Button';
import { TooltipModern, TooltipPopover, TooltipTrigger } from '../../Tooltip';

const TooltipDismissible = () => {
  const [open, setOpen] = useState(true);

  return (
    <div className="spirit-feature-tooltip-enable-data-placement">
      <p>Saves data to local storage.</p>
      <TooltipModern id="TooltipDismissibleViaJS" isOpen={open} onToggle={setOpen} placement="right" isDismissible>
        <TooltipTrigger elementType={Button}>I have a tooltip 😎</TooltipTrigger>
        <TooltipPopover>Close me</TooltipPopover>
      </TooltipModern>
    </div>
  );
};

export default TooltipDismissible;
