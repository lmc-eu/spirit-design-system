import React, { useState } from 'react';
import { Button } from '../../Button';
import TooltipWrapper from '../TooltipWrapper';
import Tooltip from '../Tooltip';

const TooltipDismissible = () => {
  const [open, setOpen] = useState(true);

  const openHandler = () => setOpen(true);
  const closeHandler = () => setOpen(false);

  return (
    <TooltipWrapper UNSAFE_className="d-inline-block">
      <Button onClick={openHandler}>I have a tooltip 😎</Button>
      <Tooltip isDismissible placement="right" open={open} onClose={closeHandler}>
        Close me
      </Tooltip>
    </TooltipWrapper>
  );
};

export default TooltipDismissible;
