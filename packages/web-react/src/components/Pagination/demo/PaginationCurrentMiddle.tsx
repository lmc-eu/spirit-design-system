import React from 'react';
import Pagination from '../Pagination';
import PaginationItem from '../PaginationItem';
import PaginationLink from '../PaginationLink';
import PaginationLinkNext from '../PaginationLinkNext';
import PaginationLinkPrevious from '../PaginationLinkPrevious';

const PaginationCurrentMiddle = () => (
  <Pagination>
    <PaginationItem>
      <PaginationLinkPrevious href="#" />
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="#" accessibilityLabel="Go to Page 11" pageNumber={11} />
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="#" accessibilityLabel="Go to Page 12" pageNumber={12} />
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="#" isCurrent accessibilityLabel="Current Page, Page 13" pageNumber={13} />
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="#" accessibilityLabel="Go to Page 14" pageNumber={14} />
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="#" accessibilityLabel="Go to Page 15" pageNumber={15} />
    </PaginationItem>
    <PaginationItem>
      <PaginationLinkNext href="#" />
    </PaginationItem>
  </Pagination>
);

export default PaginationCurrentMiddle;
