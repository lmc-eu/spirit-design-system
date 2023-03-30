import React from 'react';
import { Button } from '../Button';
import { Icon } from '../Icon';

interface PaginationItemProps {
  currentPage: number;
  onPageChange: (pageNumber: number) => void;
  type: 'left' | 'right';
}

const PaginationChevron = ({ currentPage, onPageChange, type, ...restProps }: PaginationItemProps): JSX.Element => {
  return (
    <li className="Pagination__item">
      <Button
        color="secondary"
        isSquare
        onClick={() => onPageChange(currentPage + (type === 'left' ? -1 : type === 'right' ? 1 : 0))}
      >
        <Icon name={`chevron-${type}`} />
        <span className="accessibility-hidden">{type === 'left' ? 'Previous' : type === 'right' ? 'Next' : ''}</span>
      </Button>
    </li>
  );
};

export default PaginationChevron;
