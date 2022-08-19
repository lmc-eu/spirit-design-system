import { ComponentMeta } from '@storybook/react';
import Breadcrumbs from './Breadcrumbs';

export default {
  title: 'Components/Breadcrumbs',
  component: Breadcrumbs,
  parameters: {
    docs: {
      description: {
        component: `Breadcrumbs present a trail to each previous page in relation to website's structure.`,
      },
    },
  },
} as ComponentMeta<typeof Breadcrumbs>;

export { default as Breadcrumbs } from './stories/Breadcrumbs';
export { default as HTML } from './stories/BreadcrumbsHtml';
export { default as Props } from './stories/BreadcrumbsProps';
