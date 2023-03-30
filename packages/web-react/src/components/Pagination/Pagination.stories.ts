import { ComponentMeta } from '@storybook/react';
import Pagination from './UncontrolledPagination';

export default {
  title: 'Components/Pagination',
  component: Pagination,
  parameters: {
    docs: {
      description: {
        component:
          'This will render a pagination control with provided pages, a default current page of 1, and a chapter size of 5. When the user clicks on a page number or one of the chevrons, the onPageChange callback function will be called with the new page number as its argument.',
      },
    },
  },
} as ComponentMeta<typeof Pagination>;

export { default as Pagination } from './stories/Pagination';
export { default as PaginationItemProps } from './stories/PaginationItemProps';
