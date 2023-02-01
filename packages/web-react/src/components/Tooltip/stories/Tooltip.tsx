// Because there is no `dist` directory during the CI run
/* eslint-disable import/no-extraneous-dependencies, import/extensions, import/no-unresolved */
import React from 'react';
import { ComponentStory } from '@storybook/react';
import Tooltip from '../Tooltip';
import TooltipWrapper from '../TooltipWrapper';

const Story: ComponentStory<typeof Tooltip> = () => (
  <TooltipWrapper UNSAFE_className="d-inline-block">
    <button type="button" className="Button Button--primary Button--medium TooltipTarget">
      Tooltip on bottom
    </button>
    <Tooltip>Hello there!</Tooltip>
  </TooltipWrapper>
);

Story.args = {};

export default Story;
