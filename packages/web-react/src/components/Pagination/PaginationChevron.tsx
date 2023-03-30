import React from 'react';
import { Button } from '../Button';
import { Icon } from '../Icon';

interface PaginationItemProps {
  currentPage: number;
  onPageChange: (pageNumber: number) => void;
  type: 'left' | 'right';
}

const PaginationChevron = ({ currentPage, onPageChange, type }: PaginationItemProps): JSX.Element => {
  let increment = 0;
  let text = '';
  if (type === 'left') {
    increment = -1;
    text = 'Previous';
  } else if (type === 'right') {
    increment = 1;
    text = 'Previous';
  }

  return (
    <li className="Pagination__item">
      <Button color="secondary" isSquare onClick={() => onPageChange(currentPage + increment)}>
        <Icon name={`chevron-${type}`} />
        <span className="accessibility-hidden">{text}</span>
      </Button>
    </li>
  );
};

export default PaginationChevron;
