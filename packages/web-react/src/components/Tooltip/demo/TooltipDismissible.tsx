import React, { useState } from 'react';
import { Button } from '../../Button';
import { Tooltip, TooltipPopover, TooltipTrigger } from '..';

const TooltipDismissible = () => {
  const [open, setOpen] = useState(true);

  return (
    <Tooltip
      id="TooltipDismissible"
      isOpen={open}
      onToggle={setOpen}
      placement="right"
      isDismissible
      trigger={['click']}
    >
      <TooltipTrigger elementType={Button}>I have a tooltip 😎</TooltipTrigger>
      <TooltipPopover>Close me</TooltipPopover>
    </Tooltip>
  );
};

export default TooltipDismissible;
