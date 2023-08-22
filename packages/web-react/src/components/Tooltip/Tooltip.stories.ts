import { ComponentMeta } from '@storybook/react';
import argTypes from './demo/argTypes';
import Tooltip from './Tooltip';

export default {
  title: 'Components/Tooltip',
  component: Tooltip,
  argTypes,
} as ComponentMeta<typeof Tooltip>;

export { default as Tooltip } from './demo/Tooltip';
export { default as TooltipUncontrolled } from './demo/TooltipUncontrolled';
