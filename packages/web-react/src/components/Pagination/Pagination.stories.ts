import { ComponentMeta } from '@storybook/react';
import argTypes from './stories/argTypes';
import Pagination from './Pagination';

export default {
  title: 'Components/Pagination',
  component: Pagination,
  parameters: {
    docs: {
      description: {
        component: 'Pagination is used to navigate between pages',
      },
    },
  },
  argTypes,
} as ComponentMeta<typeof Pagination>;

export { default as PaginationCurrentFirst } from './stories/PaginationCurrentFirst';
export { default as PaginationCurrentMiddle } from './stories/PaginationCurrentMiddle';
export { default as PaginationCurrentLast } from './stories/PaginationCurrentLast';
export { default as PaginationCurrentFirstCentered } from './stories/PaginationCurrentFirstCentered';
