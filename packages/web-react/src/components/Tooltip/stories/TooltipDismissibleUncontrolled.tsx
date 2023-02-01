// Because there is no `dist` directory during the CI run
/* eslint-disable import/no-extraneous-dependencies, import/extensions, import/no-unresolved */
import React from 'react';
import { ComponentStory } from '@storybook/react';
import UncontrolledTooltip from '../UncontrolledTooltip';
import TooltipWrapper from '../TooltipWrapper';

const Story: ComponentStory<typeof UncontrolledTooltip> = () => (
  <TooltipWrapper UNSAFE_className="d-inline-block">
    <button type="button" className="Button Button--primary Button--medium">
      I have a tooltip 😎
    </button>
    <UncontrolledTooltip isDismissible>Hello there!</UncontrolledTooltip>
  </TooltipWrapper>
);

Story.args = {};

export default Story;
