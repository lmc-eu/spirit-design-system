import React, { useEffect, useState } from 'react';
import { Button } from '../../Button';
import { Tooltip, TooltipPopover, TooltipTrigger } from '..';

const TooltipDismissibleViaJS = () => {
  const localStorageValue = localStorage.getItem('my-tooltip-react') === 'true';
  const [open, setOpen] = useState(localStorageValue);

  useEffect(() => {
    localStorage.setItem('my-tooltip-react', open.toString());
  }, [open]);

  return (
    <>
      <p>Saves data to local storage.</p>
      <Tooltip
        id="tooltip-dismissible-via-js"
        isOpen={open}
        onToggle={setOpen}
        placement="right"
        isDismissible
        trigger={['click']}
      >
        <TooltipTrigger elementType={Button}>I have a tooltip 😎</TooltipTrigger>
        <TooltipPopover>Close me</TooltipPopover>
      </Tooltip>
    </>
  );
};

export default TooltipDismissibleViaJS;
