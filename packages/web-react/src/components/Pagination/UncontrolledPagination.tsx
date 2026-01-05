'use client';

import React from 'react';
import { type ClickEvent, type SpiritUncontrolledPaginationProps } from '../../types';
import {
  PAGINATION_LINK_DEFAULT_ACCESSIBILITY_LABEL_PREFIX,
  PAGINATION_NEXT_LINK_DEFAULT_ACCESSIBILITY_LABEL,
  PAGINATION_PREVIOUS_LINK_DEFAULT_ACCESSIBILITY_LABEL,
} from './constants';
import Pagination from './Pagination';
import PaginationItem from './PaginationItem';
import PaginationLink from './PaginationLink';
import PaginationLinkNext from './PaginationLinkNext';
import PaginationLinkPrevious from './PaginationLinkPrevious';
import { usePagination } from './usePagination';

const UncontrolledPagination = (props: SpiritUncontrolledPaginationProps): JSX.Element => {
  const {
    accessibilityLabel = PAGINATION_LINK_DEFAULT_ACCESSIBILITY_LABEL_PREFIX,
    accessibilityLabelPrevious = PAGINATION_PREVIOUS_LINK_DEFAULT_ACCESSIBILITY_LABEL,
    accessibilityLabelNext = PAGINATION_NEXT_LINK_DEFAULT_ACCESSIBILITY_LABEL,
    defaultPage = 1,
    onChange,
    totalPages = 0,
    visiblePages = 5,
    ...rest
  } = props;
  const { currentPage, pages, handlePageChange } = usePagination({
    defaultPage,
    onChange,
    totalPages,
    visiblePages,
  });

  return (
    <Pagination {...rest}>
      {currentPage !== 1 && (
        <PaginationLinkPrevious
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

UncontrolledPagination.spiritComponent = 'UncontrolledPagination';

export default UncontrolledPagination;
