import React, { useState } from 'react';
import { Button } from '../../Button';
import Tooltip from '../Tooltip';
import TooltipPopover from '../TooltipPopover';
import TooltipTrigger from '../TooltipTrigger';

const TooltipTriggers = () => {
  const [openAll, setOpenAll] = useState(false);
  const [openHover, setOpenHover] = useState(false);
  const [openClick, setOpenClick] = useState(false);
  const [openFocus, setOpenFocus] = useState(false);

  return (
    <>
      <p>
        This tooltip will show on <strong>hover</strong>, <strong>click</strong>, and <strong>focus</strong>.
      </p>
      <Tooltip
        id="tooltip-all"
        isOpen={openAll}
        onToggle={setOpenAll}
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
        isOpen={openHover}
        onToggle={setOpenHover}
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
        isOpen={openClick}
        onToggle={setOpenClick}
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
        isOpen={openFocus}
        onToggle={setOpenFocus}
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
