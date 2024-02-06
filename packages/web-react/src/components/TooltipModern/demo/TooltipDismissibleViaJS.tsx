import React, { useEffect, useState } from 'react';
import { Button } from '../../Button';
import { TooltipModern, TooltipPopover, TooltipTrigger } from '../../Tooltip';

const TooltipDismissibleViaJS = () => {
  const localStorageValue = localStorage.getItem('my-tooltip-react') === 'true';
  const [open, setOpen] = useState(localStorageValue);

  useEffect(() => {
    localStorage.setItem('my-tooltip-react', open.toString());
  }, [open]);

  return (
    <div className="docs-Stack docs-Stack-stretch spirit-feature-tooltip-enable-data-placement">
      <p>Saves data to local storage.</p>
      <TooltipModern
        id="TooltipDismissibleViaJS"
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

export default TooltipDismissibleViaJS;
