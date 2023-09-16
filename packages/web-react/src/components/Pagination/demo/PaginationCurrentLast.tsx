import React from 'react';
import Pagination from '../Pagination';
import PaginationItem from '../PaginationItem';
import PaginationLink from '../PaginationLink';
import PaginationLinkPrevious from '../PaginationLinkPrevious';

const PaginationCurrentLast = () => (
  <Pagination>
    <PaginationItem>
      <PaginationLinkPrevious href="#" />
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="#" accessibilityLabel="Go to Page 109" pageNumber={109} />
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="#" accessibilityLabel="Go to Page 110" pageNumber={110} />
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="#" accessibilityLabel="Go to Page 111" pageNumber={111} />
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="#" accessibilityLabel="Go to Page 112" pageNumber={112} />
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="#" isCurrent accessibilityLabel="Current Page, Page 113" pageNumber={113} />
    </PaginationItem>
  </Pagination>
);

export default PaginationCurrentLast;
