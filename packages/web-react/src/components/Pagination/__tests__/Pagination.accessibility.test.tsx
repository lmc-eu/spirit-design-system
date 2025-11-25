import React from 'react';
import { accessibilityTest } from '@local/tests';
import Pagination from '../Pagination';
import PaginationItem from '../PaginationItem';
import PaginationLink from '../PaginationLink';

jest.mock('../../../hooks/useIcon');

describe('Pagination accessibility', () => {
  accessibilityTest(
    (props) => (
      <Pagination {...props}>
        <PaginationItem>
          <PaginationLink href="#" pageNumber={1} accessibilityLabel="Go to Page 1" />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#" pageNumber={2} isCurrent accessibilityLabel="Current Page, Page 2" />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#" pageNumber={3} accessibilityLabel="Go to Page 3" />
        </PaginationItem>
      </Pagination>
    ),
    'nav',
  );
});
