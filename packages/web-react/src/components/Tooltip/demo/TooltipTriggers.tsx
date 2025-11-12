import React, { useState } from 'react';
import { Button } from '../../Button';
import Tooltip from '../Tooltip';
import TooltipPopover from '../TooltipPopover';
import TooltipTrigger from '../TooltipTrigger';

const TooltipTriggers = () => {
  const [isAllOpen, setIsAllOpen] = useState(false);
  const [isHoverOpen, setIsHoverOpen] = useState(false);
  const [isClickOpen, setIsClickOpen] = useState(false);
  const [isFocusOpen, setIsFocusOpen] = useState(false);

  return (
    <>
      <p>
        This tooltip will show on <strong>hover</strong>, <strong>click</strong>, and <strong>focus</strong>.
      </p>
      <Tooltip
        id="tooltip-all"
        isOpen={isAllOpen}
        onToggle={setIsAllOpen}
        trigger={['hover', 'click', 'focus']}
        placement="right"
        flipFallbackPlacements={['bottom']}
      >
        <TooltipTrigger elementType={Button}>All triggers 😎</TooltipTrigger>
        <TooltipPopover>Hello there!</TooltipPopover>
      </Tooltip>

      <br />

      <p>
        This tooltip will show only on <strong>hover</strong>.
      </p>
      <Tooltip
        id="tooltip-hover"
        isOpen={isHoverOpen}
        onToggle={setIsHoverOpen}
        trigger={['hover']}
        placement="right"
        flipFallbackPlacements={['bottom']}
      >
        <TooltipTrigger elementType={Button}>Hover me 😎</TooltipTrigger>
        <TooltipPopover>Hello there!</TooltipPopover>
      </Tooltip>

      <br />

      <p>
        This tooltip will show only on <strong>click</strong>.
      </p>
      <Tooltip
        id="tooltip-click"
        isOpen={isClickOpen}
        onToggle={setIsClickOpen}
        trigger={['click']}
        placement="right"
        flipFallbackPlacements={['bottom']}
      >
        <TooltipTrigger elementType={Button}>Click me 😎</TooltipTrigger>
        <TooltipPopover>Hello there!</TooltipPopover>
      </Tooltip>

      <br />

      <p>
        This tooltip will show only on <strong>focus</strong> (use Tab key to focus).
      </p>
      <Tooltip
        id="tooltip-focus"
        isOpen={isFocusOpen}
        onToggle={setIsFocusOpen}
        trigger={['focus']}
        placement="right"
        flipFallbackPlacements={['bottom']}
      >
        <TooltipTrigger elementType={Button}>Focus me 😎</TooltipTrigger>
        <TooltipPopover>Hello there!</TooltipPopover>
      </Tooltip>
    </>
  );
};

export default TooltipTriggers;
