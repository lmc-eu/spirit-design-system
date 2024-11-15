'use client';

import React from 'react';
import { ClickEvent, SpiritUncontrolledPaginationProps } from '../../types';
import Pagination from './Pagination';
import PaginationItem from './PaginationItem';
import PaginationLink from './PaginationLink';
import PaginationLinkNext from './PaginationLinkNext';
import PaginationLinkPrevious from './PaginationLinkPrevious';
import { usePagination } from './usePagination';

const UncontrolledPagination = (props: SpiritUncontrolledPaginationProps): JSX.Element => {
  const {
    accessibilityLabel,
    accessibilityLabelPrevious = 'Previous',
    accessibilityLabelNext = 'Next',
    defaultPage = 1,
    href,
    onChange,
    totalPages = 0,
    visiblePages = 5,
    ...rest
  } = props;
  const { currentPage, pages, handlePageChange } = usePagination({
    defaultPage,
    href,
    onChange,
    totalPages,
    visiblePages,
  });

  return (
    <Pagination {...rest}>
      {currentPage !== 1 && (
        <PaginationLinkPrevious
          href={href}
          accessibilityLabel={accessibilityLabelPrevious}
          onClick={(event) => {
            event.preventDefault();
            handlePageChange(currentPage - 1);
          }}
        />
      )}
      {pages?.map((pageNumber: number) => (
        <PaginationItem key={pageNumber}>
          <PaginationLink
            accessibilityLabel={`${accessibilityLabel} ${pageNumber}`}
            href="#"
            isCurrent={currentPage === pageNumber}
            pageNumber={pageNumber}
            onClick={(event: ClickEvent) => {
              event.preventDefault();
              handlePageChange(pageNumber);
            }}
          />
        </PaginationItem>
      ))}
      {currentPage !== totalPages && (
        <PaginationLinkNext
          href={href}
          accessibilityLabel={accessibilityLabelNext}
          onClick={(event) => {
            event.preventDefault();
            handlePageChange(currentPage + 1);
          }}
        />
      )}
    </Pagination>
  );
};

export default UncontrolledPagination;
