import classNames from 'classnames';
import React, { ElementType, useMemo, useState } from 'react';
import { useStyleProps } from '../../hooks/styleProps';
import { SpiritPaginationProps } from '../../types/pagination';
import { Button } from '../Button';
import { Icon } from '../Icon';
import PaginationItem from './PaginationItem';
import { usePaginationStyleProps } from './usePaginationStyleProps';

const defaultProps = {
  totalPages: 0,
};
const CHAPTER_SIZE = 5;

export const Pagination = <T extends ElementType = 'nav'>(props: SpiritPaginationProps<T>): JSX.Element => {
  const { elementType: ElementTag = 'nav', totalPages, onPageChange, defaultPage, ...restProps } = props;
  const { classProps, props: modifiedProps } = usePaginationStyleProps({ ...restProps });

  const { styleProps, props: otherProps } = useStyleProps(modifiedProps);
  const [currentPage, setCurrentPage] = useState(defaultPage <= 0 ? 1 : defaultPage ?? 1);
  const [pagesArray, setPagesArray] = useState([CHAPTER_SIZE] ?? [5]);

  useMemo(() => {
    const currentChapterSize = CHAPTER_SIZE > totalPages ? totalPages : CHAPTER_SIZE;
    const firstPageChapter =
      totalPages - currentPage < currentChapterSize ? totalPages - (currentChapterSize - 1) : currentPage;

    setPagesArray(Array.from(Array(currentChapterSize), (_, index) => index + firstPageChapter));
  }, [totalPages]);

  const handlePageChange = React.useCallback(
    (pageNumber: number) => {
      setCurrentPage(pageNumber);
      onPageChange(pageNumber);
    },
    [onPageChange],
  );

  function getPagination() {
    const halfChap = Math.floor(CHAPTER_SIZE / 2);
    const startPage = Math.max(1, currentPage - halfChap);
    const endPage = Math.min(startPage + CHAPTER_SIZE - 1, totalPages);

    return Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i);
  }

  useMemo(() => {
    setPagesArray(getPagination());
  }, [currentPage]);

  return (
    <ElementTag {...otherProps} {...styleProps} className="mb-800" aria-label="Page navigation">
      <ul className={classNames(classProps, styleProps.className)}>
        {currentPage !== 1 && (
          <li className="Pagination__item">
            <Button color="secondary" isSquare onClick={() => handlePageChange(currentPage - 1)}>
              <Icon name="chevron-left" />
              <span className="accessibility-hidden">Previous</span>
            </Button>
          </li>
        )}

        {pagesArray?.map((pageNumber) => (
          <PaginationItem
            key={pageNumber}
            pageNumber={pageNumber}
            onPageChange={handlePageChange}
            isPageActive={currentPage === pageNumber}
          />
        ))}
        {currentPage !== totalPages && (
          <li className="Pagination__item">
            <Button color="secondary" isSquare onClick={() => handlePageChange(currentPage + 1)}>
              <Icon name="chevron-right" />
              <span className="accessibility-hidden">Next</span>
            </Button>
          </li>
        )}
      </ul>
    </ElementTag>
  );
};

Pagination.defaultProps = defaultProps;

export default Pagination;
