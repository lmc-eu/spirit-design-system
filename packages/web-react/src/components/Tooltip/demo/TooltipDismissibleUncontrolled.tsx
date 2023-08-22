// Because there is no `dist` directory during the CI run
/* eslint-disable import/no-extraneous-dependencies, import/extensions, import/no-unresolved */
import React from 'react';
import { ComponentStory } from '@storybook/react';
import UncontrolledTooltip from '../UncontrolledTooltip';
import TooltipWrapper from '../TooltipWrapper';
import { Button } from '../../Button';

const Story: ComponentStory<typeof UncontrolledTooltip> = () => (
  <TooltipWrapper UNSAFE_className="d-inline-block">
    <Button UNSAFE_className="TooltipTarget">I have a tooltip 😎</Button>
    <UncontrolledTooltip isDismissible>Hello there!</UncontrolledTooltip>
  </TooltipWrapper>
);

Story.args = {};

export default Story;
