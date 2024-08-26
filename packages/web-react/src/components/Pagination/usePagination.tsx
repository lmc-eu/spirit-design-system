import { useCallback, useMemo, useState } from 'react';
import { UsePaginationProps } from '../../types/pagination';

export const usePagination = ({ totalPages, onChange, defaultPage, visiblePages }: UsePaginationProps) => {
  const [currentPage, setCurrentPage] = useState(defaultPage <= 0 || defaultPage > totalPages ? 1 : (defaultPage ?? 1));
  const [pages, setPagesArray] = useState([visiblePages] ?? [5]);

  useMemo(() => {
    const currentVisiblePages = visiblePages > totalPages ? totalPages : visiblePages;
    const firstPageChapter =
      totalPages - currentPage < currentVisiblePages ? totalPages - (currentVisiblePages - 1) : currentPage;

    setPagesArray(Array.from(Array(currentVisiblePages), (_, index) => index + firstPageChapter));
  }, [visiblePages, currentPage, totalPages]);

  const handlePageChange = useCallback(
    (pageNumber: number) => {
      setCurrentPage(pageNumber);
      onChange && onChange(pageNumber);
    },
    [onChange],
  );

  const getPagination = () => {
    const halfChap = Math.floor(visiblePages / 2);
    let startPage = Math.max(1, currentPage - halfChap);
    const endPage = Math.min(startPage + visiblePages - 1, totalPages);

    if (totalPages - visiblePages < startPage - 1) {
      const tmpStartPage = totalPages - visiblePages + 1;
      startPage = tmpStartPage < 1 ? 1 : tmpStartPage;
    }

    return Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i);
  };

  useMemo(() => {
    setPagesArray(getPagination());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    totalPages,
    currentPage,
    pages,
    handlePageChange,
  };
};
