import { ComponentStory } from '@storybook/react';
import React, { ElementType } from 'react';
import { SpiritPaginationProps } from '../../../types';
import Pagination from '../Pagination';

const Story: ComponentStory<typeof Pagination> = <T extends ElementType = 'nav'>(args: SpiritPaginationProps<T>) => (
  <Pagination {...args} />
);
Story.args = {
  totalPages: 10,
  onPageChange: (pageNumber) => console.info(`Navigating to page ${pageNumber}`),
  defaultPage: 5,
};
export default Story;
