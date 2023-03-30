import React from 'react';

interface PaginationItemProps {
  isActive: boolean;
  onPageChange: (pageNumber: number) => void;
  pageNumber: number;
}

const PaginationItem = ({ isActive, onPageChange, pageNumber, ...restProps }: PaginationItemProps): JSX.Element => {
  return (
    <li className="Pagination__item" key={`PaginationPage_${pageNumber}`}>
      <button
        type="button"
        className={`Pagination__link typography-body-medium-text-bold ${isActive ? 'Pagination__link--current' : ''}`}
        aria-label={isActive ? `Current Page, Page ${pageNumber}` : `Goto Page ${pageNumber}`}
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
