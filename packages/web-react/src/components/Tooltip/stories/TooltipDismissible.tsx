// Because there is no `dist` directory during the CI run
/* eslint-disable import/no-extraneous-dependencies, import/extensions, import/no-unresolved */
import React, { useState } from 'react';
import { ComponentStory } from '@storybook/react';
import Tooltip from '../Tooltip';
import TooltipWrapper from '../TooltipWrapper';

const Story: ComponentStory<typeof Tooltip> = () => {
  const [open, setOpen] = useState(true);

  const closeHandler = () => setOpen(false);

  return (
    <TooltipWrapper UNSAFE_className="d-inline-block">
      <button type="button" className="Button Button--primary Button--medium">
        I have a tooltip 😎
      </button>
      <Tooltip isDismissible open={open} onClose={closeHandler}>
        Hello there!
      </Tooltip>
    </TooltipWrapper>
  );
};

Story.args = {};

export default Story;
