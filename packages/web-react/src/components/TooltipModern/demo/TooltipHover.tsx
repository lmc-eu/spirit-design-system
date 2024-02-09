import React from 'react';
import { TooltipModern, TooltipPopover, TooltipTrigger } from '..';
import { Button } from '../../Button';

const TooltipHover = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <TooltipModern id="tooltip-on-hover-floating-ui" isOpen={open} onToggle={setOpen} enableHover placement="right">
      <TooltipTrigger elementType={Button}>I have a tooltip 😎</TooltipTrigger>
      <TooltipPopover>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, labore eveniet deleniti rerum quod voluptatem
        autem aperiam officiis qui officia! Suscipit aspernatur minima dolorum rerum harum ipsa neque culpa facilis?
      </TooltipPopover>
    </TooltipModern>
  );
};

export default TooltipHover;
