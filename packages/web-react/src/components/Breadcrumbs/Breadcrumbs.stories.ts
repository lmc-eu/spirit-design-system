import { ComponentMeta } from '@storybook/react';
import argTypes from './demo/argTypes';
import Breadcrumbs from './Breadcrumbs';

export default {
  title: 'Components/Breadcrumbs',
  component: Breadcrumbs,
  parameters: {
    docs: {
      description: {
        component: "Breadcrumbs present a trail to each previous page in relation to website's structure.",
      },
    },
  },
  argTypes,
} as ComponentMeta<typeof Breadcrumbs>;

export { default as Breadcrumbs } from './demo/Breadcrumbs';
