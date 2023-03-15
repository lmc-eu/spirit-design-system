import { ComponentMeta } from '@storybook/react';
import Collapse from './Collapse';

export default {
  title: 'Components/Collapse',
  parameters: {
    docs: {
      description: {
        component: `
  [Spirit Collapse](https://spirit.supernova-docs.io/spirit/latest/components/collapse/overview.html)

  Toggle the visibility of content across your project with Collapse.
  `,
      },
    },
  },
} as ComponentMeta<typeof Collapse>;

export { default as Collapse } from './stories/Collapse';
export { default as CollapseHideOnClose } from './stories/CollapseHideOnClose';
export { default as CollapseShowMore } from './stories/CollapseShowMore';
export { default as CollapseBreakpoints } from './stories/CollapseBreakpoints';
export { default as CollapseProps } from './stories/CollapseProps';
export { default as CollapseHtml } from './stories/CollapseHtml';
export { default as CollapseUncontrolled } from './stories/CollapseUncontrolled';
export { default as CollapseUncontrolledHideOnClose } from './stories/CollapseUncontrolledHideOnClose';
export { default as CollapseUncontrolledShowMore } from './stories/CollapseUncontrolledShowMore';
export { default as CollapseUncontrolledProps } from './stories/CollapseUncontrolledProps';
