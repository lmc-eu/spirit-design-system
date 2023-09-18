import React, { useEffect, useState } from 'react';
import { Button } from '../../Button';
import TooltipWrapper from '../TooltipWrapper';
import Tooltip from '../Tooltip';

const TooltipDismissibleViaJS = () => {
  const localStorageValue = localStorage.getItem('my-tooltip-react') === 'true';
  const [open, setOpen] = useState(localStorageValue);

  const openHandler = () => setOpen(true);
  const closeHandler = () => setOpen(false);

  useEffect(() => {
    localStorage.setItem('my-tooltip-react', open.toString());
  }, [open]);

  return (
    <>
      <p>Saves data to local storage.</p>
      <TooltipWrapper UNSAFE_className="d-inline-block">
        <Button onClick={openHandler}>I have a tooltip 😎</Button>
        <Tooltip isDismissible placement="right" open={open} onClose={closeHandler}>
          Close me
        </Tooltip>
      </TooltipWrapper>
    </>
  );
};

export default TooltipDismissibleViaJS;
