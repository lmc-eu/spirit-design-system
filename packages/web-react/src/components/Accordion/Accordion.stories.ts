import { ComponentMeta } from '@storybook/react';
import Accordion from './Accordion';

export default {
  title: 'Components/Accordion',
  parameters: {
    docs: {
      description: {
        component: `
  [Spirit Accordion](https://spirit.supernova-docs.io/spirit/latest/components/accordion/overview.html)

  Toggle the visibility of content across your project with Accordion.
  `,
      },
    },
  },
} as ComponentMeta<typeof Accordion>;

export { default as Accordion } from './stories/Accordion';
export { default as AccordionStayOpen } from './stories/AccordionStayOpen';
export { default as AccordionUncontrolled } from './stories/AccordionUncontrolled';
export { default as AccordionUncontrolledStayOpen } from './stories/AccordionUncontrolledStayOpen';
