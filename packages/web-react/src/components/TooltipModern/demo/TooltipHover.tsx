import React from 'react';
import { TooltipModern, TooltipPopover, TooltipTrigger } from '..';
import { Button } from '../../Button';

const TooltipHover = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <TooltipModern
      id="tooltip-on-hover-floating-ui"
      isOpen={open}
      onToggle={setOpen}
      placement="right"
      flipFallbackPlacements={['left', 'top-start', 'bottom-start']}
    >
      <TooltipTrigger elementType={Button}>I have a tooltip 😎</TooltipTrigger>
      <TooltipPopover>
        Hello there! <br />
        <a href="#">Click me</a>
      </TooltipPopover>
    </TooltipModern>
  );
};

export default TooltipHover;
