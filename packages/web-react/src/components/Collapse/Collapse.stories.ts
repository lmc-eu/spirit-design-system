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

export { default as Collapse } from './demo/Collapse';
export { default as CollapseUncontrolled } from './demo/CollapseUncontrolled';
