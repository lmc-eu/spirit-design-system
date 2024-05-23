import React, { useState } from 'react';
import { Button } from '../../Button';
import Tooltip from '../Tooltip';
import TooltipPopover from '../TooltipPopover';
import TooltipTrigger from '../TooltipTrigger';

const TooltipTriggers = () => {
  const [openHoverClick, setOpenHoverClick] = useState(false);
  const [openHover, setOpenHover] = useState(false);
  const [openClick, setOpenClick] = useState(false);

  return (
    <>
      <p>
        This tooltip will show on <strong>hover</strong> and <strong>click</strong>.
      </p>
      <Tooltip
        id="tooltip-hover-click"
        isOpen={openHoverClick}
        onToggle={setOpenHoverClick}
        trigger={['hover', 'click']} // this is default value
        placement="right"
        flipFallbackPlacements={['bottom']}
      >
        <TooltipTrigger elementType={Button}>Hover or Click me 😎</TooltipTrigger>
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
    </>
  );
};

export default TooltipTriggers;
