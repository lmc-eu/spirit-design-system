import { ComponentMeta } from '@storybook/react';
import argTypes from './demo/argTypes';
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

export { default as PaginationCurrentFirst } from './demo/PaginationCurrentFirst';
export { default as PaginationCurrentMiddle } from './demo/PaginationCurrentMiddle';
export { default as PaginationCurrentLast } from './demo/PaginationCurrentLast';
