import React from 'react';
import { Button } from '../../Button';
import { UncontrolledTooltip, TooltipPopover, TooltipTrigger } from '..';

const UncontrolledTooltipDemo = () => (
  <UncontrolledTooltip id="uncontrolled-tooltip" placement="left" isFocusableOnHover isDismissible>
    <TooltipTrigger elementType={Button}>I have a tooltip 😎</TooltipTrigger>
    <TooltipPopover>Close me</TooltipPopover>
  </UncontrolledTooltip>
);

export default UncontrolledTooltipDemo;
