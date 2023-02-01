// Because there is no `dist` directory during the CI run
/* eslint-disable import/no-extraneous-dependencies, import/extensions, import/no-unresolved */
import React, { useState } from 'react';
import { ComponentStory } from '@storybook/react';
import Tooltip from '../Tooltip';
import TooltipWrapper from '../TooltipWrapper';

const Story: ComponentStory<typeof Tooltip> = () => {
  const [open, setOpen] = useState(false);

  const toggleHandler = () => setOpen(!open);

  return (
    <>
      <div className="mb-800">
        <button type="button" className="Button Button--primary Button--medium mb-800" onClick={toggleHandler}>
          Toggle tooltip
        </button>
      </div>
      <TooltipWrapper UNSAFE_className="d-inline-block">
        <div className="docs-Box px-600 py-500">I have an externally-triggered tooltip</div>
        <Tooltip open={open}>Hello there!</Tooltip>
      </TooltipWrapper>
    </>
  );
};

Story.args = {};

export default Story;
