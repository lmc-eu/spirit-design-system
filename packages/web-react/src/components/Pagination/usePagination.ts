import { ElementType, useCallback, useMemo, useState } from 'react';
import { useStyleProps } from '../../hooks/styleProps';
import { SpiritPaginationProps } from '../../types/pagination';
import { usePaginationStyleProps } from './usePaginationStyleProps';

const CHAPTER_SIZE = 5;

export const usePagination = <T extends ElementType = 'nav'>({
  totalPages,
  onPageChange,
  defaultPage,
  ...restProps
}: SpiritPaginationProps<T>) => {
  const { classProps, props: modifiedProps } = usePaginationStyleProps({ ...restProps });
  const { styleProps, props: otherProps } = useStyleProps(modifiedProps);
  const [currentPage, setCurrentPage] = useState(defaultPage <= 0 || defaultPage > totalPages ? 1 : defaultPage ?? 1);
  const [pagesArray, setPagesArray] = useState([CHAPTER_SIZE] ?? [5]);

  useMemo(() => {
    const currentChapterSize = CHAPTER_SIZE > totalPages ? totalPages : CHAPTER_SIZE;
    const firstPageChapter =
      totalPages - currentPage < currentChapterSize ? totalPages - (currentChapterSize - 1) : currentPage;

    setPagesArray(Array.from(Array(currentChapterSize), (_, index) => index + firstPageChapter));
  }, [totalPages]);

  const handlePageChange = useCallback(
    (pageNumber: number) => {
      setCurrentPage(pageNumber);
      onPageChange(pageNumber);
    },
    [onPageChange],
  );

  const getPagination = () => {
    const halfChap = Math.floor(CHAPTER_SIZE / 2);
    let startPage = Math.max(1, currentPage - halfChap);
    const endPage = Math.min(startPage + CHAPTER_SIZE - 1, totalPages);

    if (totalPages - CHAPTER_SIZE < startPage - 1) {
      const tmpStartPage = totalPages - CHAPTER_SIZE + 1;
      startPage = tmpStartPage < 1 ? 1 : tmpStartPage;
    }

    return Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i);
  };

  useMemo(() => {
    setPagesArray(getPagination());
  }, [currentPage]);

  return {
    totalPages,
    currentPage,
    pagesArray,
    handlePageChange,
    otherProps,
    styleProps,
    classProps,
  };
};
