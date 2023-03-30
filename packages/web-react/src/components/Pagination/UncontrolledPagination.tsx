import classNames from 'classnames';
import React, { ElementType } from 'react';
import { SpiritPaginationProps } from '../../types/pagination';
import PaginationChevron from './PaginationChevron';
import PaginationItem from './PaginationItem';
import { usePagination } from './usePagination';

const defaultProps = {
  totalPages: 0,
};

export const Pagination = <T extends ElementType = 'nav'>(props: SpiritPaginationProps<T>): JSX.Element => {
  const { elementType: ElementTag = 'nav' } = props;
  const { totalPages, currentPage, pagesArray, handlePageChange, otherProps, styleProps, classProps } =
    usePagination(props);

  return (
    <ElementTag {...otherProps} {...styleProps} aria-label="Page navigation">
      <ul className={classNames(classProps, styleProps.className)}>
        {currentPage !== 1 && (
          <PaginationChevron currentPage={currentPage} onPageChange={handlePageChange} type="left" />
        )}
        {pagesArray?.map((pageNumber) => (
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

Pagination.defaultProps = defaultProps;

export default Pagination;
