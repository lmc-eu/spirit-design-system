import React from 'react';
import Pagination from '../Pagination';
import PaginationItem from '../PaginationItem';
import PaginationLink from '../PaginationLink';
import PaginationLinkNext from '../PaginationLinkNext';

const PaginationCurrentFirst = () => (
  <Pagination>
    <PaginationItem>
      <PaginationLink href="#" isCurrent accessibilityLabel="Current Page, Page 1" pageNumber={1} />
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="#" accessibilityLabel="Go to Page 2" pageNumber={2} />
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="#" accessibilityLabel="Go to Page 3" pageNumber={3} />
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="#" accessibilityLabel="Go to Page 4" pageNumber={4} />
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="#" accessibilityLabel="Go to Page 5" pageNumber={5} />
    </PaginationItem>
    <PaginationItem>
      <PaginationLinkNext href="#" />
    </PaginationItem>
  </Pagination>
);

export default PaginationCurrentFirst;
