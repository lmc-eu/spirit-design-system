import { ComponentMeta } from '@storybook/react';
import Tooltip from './Tooltip';

export default {
  title: 'Components/Tooltip',
  component: Tooltip,
} as ComponentMeta<typeof Tooltip>;

export { default as Tooltip } from './stories/Tooltip';
export { default as TooltipDismissible } from './stories/TooltipDismissible';
export { default as TooltipClickable } from './stories/TooltipClickable';
export { default as TooltipFloatingUi } from './stories/TooltipFloatingUi';
export { default as TooltipDismissibleFloatingUi } from './stories/TooltipDismissibleFloatingUi';
export { default as TooltipUncontrolled } from './stories/TooltipUncontrolled';
export { default as TooltipDismissibleUncontrolled } from './stories/TooltipDismissibleUncontrolled';
