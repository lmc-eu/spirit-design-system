import React from 'react';
import { usePaginationStyleProps } from './usePaginationStyleProps';

interface PaginationItemProps {
  pageNumber: number;
  onPageChange: (pageNumber: number) => void;
  isPageActive: boolean;
}

const PaginationItem = ({ pageNumber, onPageChange, isPageActive, ...restProps }: PaginationItemProps): JSX.Element => {
  const { classProps } = usePaginationStyleProps({ restProps });

  return (
    <li className={`${classProps}__item`} key={`PaginationPage_${pageNumber}`}>
      <button
        type="button"
        className={`${classProps}__link typography-body-medium-text-bold ${
          isPageActive ? `${classProps}__link--current` : ''
        }`}
        aria-label={isPageActive ? `Current Page, Page ${pageNumber}` : `Goto Page ${pageNumber}`}
        aria-current="page"
        onClick={() => onPageChange(pageNumber)}
      >
        <span className="accessibility-hidden">page</span>
        {pageNumber}
      </button>
    </li>
  );
};

export default PaginationItem;
