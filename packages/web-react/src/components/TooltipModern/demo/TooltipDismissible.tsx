import React, { useState } from 'react';
import { Button } from '../../Button';
import { TooltipModern, TooltipPopover, TooltipTrigger } from '../../Tooltip';

const TooltipDismissible = () => {
  const [open, setOpen] = useState(true);

  return (
    <div className="docs-Stack docs-Stack-stretch spirit-feature-tooltip-enable-data-placement">
      <TooltipModern
        id="TooltipDismissible"
        isOpen={open}
        onToggle={setOpen}
        placement="right"
        isDismissible
        trigger={['click']}
      >
        <TooltipTrigger elementType={Button}>I have a tooltip 😎</TooltipTrigger>
        <TooltipPopover>Close me</TooltipPopover>
      </TooltipModern>
    </div>
  );
};

export default TooltipDismissible;
