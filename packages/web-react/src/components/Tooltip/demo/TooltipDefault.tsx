import React, { useState } from 'react';
import { Button } from '../../Button';
import { Tooltip, TooltipPopover, TooltipTrigger } from '..';

const TooltipDefault = () => {
  const [open, setOpen] = useState(true);

  return (
    <Tooltip id="TooltipDefault" isOpen={open} onToggle={setOpen}>
      <TooltipTrigger elementType={Button}>I have a tooltip 😎</TooltipTrigger>
      <TooltipPopover>Hello there!</TooltipPopover>
    </Tooltip>
  );
};

export default TooltipDefault;
