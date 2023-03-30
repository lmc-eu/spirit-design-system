import classNames from 'classnames';
import React, { ElementType, useCallback } from 'react';
import { SpiritPaginationProps } from '../../types/pagination';
import PaginationChevron from './PaginationChevron';
import PaginationItem from './PaginationItem';
import { usePagination } from './usePagination';

export type PaginationProps<T extends ElementType = 'nav'> = SpiritPaginationProps<T> & {
  currentPage: number;
  onPageChange: (pageNumber: number) => void;
};

export const Pagination = <T extends ElementType = 'nav'>({
  currentPage,
  onPageChange,
  ...props
}: PaginationProps<T>): JSX.Element => {
  const { elementType: ElementTag = 'nav' } = props;
  const { totalPages, pagesArray, otherProps, styleProps, classProps } = usePagination({
    ...props,
    defaultPage: currentPage,
    onPageChange,
  });

  const handlePageChange = useCallback(
    (pageNumber: number) => {
      onPageChange(pageNumber);
    },
    [onPageChange],
  );

  return (
    <ElementTag {...otherProps} {...styleProps} className="mb-800" aria-label="Page navigation">
      <ul className={classNames(classProps, styleProps.className)}>
        {currentPage !== 1 && (
          <PaginationChevron currentPage={currentPage} onPageChange={handlePageChange} type="left" />
        )}
        {pagesArray.map((pageNumber) => (
          <PaginationItem
            key={pageNumber}
            pageNumber={pageNumber}
            onPageChange={handlePageChange}
            isActive={currentPage === pageNumber}
          />
        ))}
        {currentPage !== totalPages && (
          <PaginationChevron currentPage={currentPage} onPageChange={handlePageChange} type="right" />
        )}
      </ul>
    </ElementTag>
  );
};

export default Pagination;
