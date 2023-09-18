import React, { useState } from 'react';
import DocsBox from '../../../../docs/DocsBox';
import { Button } from '../../Button';
import TooltipWrapper from '../TooltipWrapper';
import Tooltip from '../Tooltip';

const TooltipClickable = () => {
  const [open, setOpen] = useState(false);

  const toggleHandler = () => setOpen(!open);

  return (
    <>
      <Button id="tooltip-trigger" onClick={toggleHandler}>
        Toggle tooltip
      </Button>

      <TooltipWrapper UNSAFE_className="d-inline-block">
        <DocsBox aria-describedby="my-js-controlled-tooltip">I have an externally-triggered tooltip</DocsBox>
        <Tooltip open={open} id="my-js-controlled-tooltip">
          Hello there!
        </Tooltip>
      </TooltipWrapper>
    </>
  );
};

export default TooltipClickable;
