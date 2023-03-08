// Because there is no `dist` directory during the CI run
/* eslint-disable import/no-extraneous-dependencies, import/extensions, import/no-unresolved */
import React from 'react';
import { ComponentStory } from '@storybook/react';
import Tooltip from '../Tooltip';
import TooltipWrapper from '../TooltipWrapper';
import { Button } from '../../Button';

const Story: ComponentStory<typeof Tooltip> = () => (
  <TooltipWrapper UNSAFE_className="d-inline-block">
    <Button UNSAFE_className="TooltipTarget">Tooltip on bottom</Button>
    <Tooltip>Hello there!</Tooltip>
  </TooltipWrapper>
);

Story.args = {};

export default Story;
