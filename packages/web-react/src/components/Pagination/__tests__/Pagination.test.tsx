import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import Pagination from '../UncontrolledPagination';

describe('Pagination component', () => {
  const onPageChange = jest.fn();

  beforeEach(() => {
    onPageChange.mockClear();
  });

  it('renders pagination items with current page selected', () => {
    render(<Pagination totalPages={10} defaultPage={5} onPageChange={onPageChange} />);

    const items = screen.getAllByRole('button');
    expect(items).toHaveLength(7);

    const selectedPageItem = screen.getByLabelText('Current Page, Page 5');
    expect(selectedPageItem).toHaveClass('Pagination__link typography-body-medium-text-bold Pagination__link--current');
  });

  it('renders disabled items for the first and last page', () => {
    const { container } = render(<Pagination totalPages={10} defaultPage={1} onPageChange={onPageChange} />);

    const items = screen.getAllByRole('button');
    expect(items).toHaveLength(6);

    const firstPageItem = screen.getByLabelText('Current Page, Page 1');
    const lastItemPage = container.querySelector('.Button--square');

    expect(firstPageItem).toHaveClass('Pagination__link typography-body-medium-text-bold');
    expect(lastItemPage).toHaveClass('Button Button--secondary Button--medium Button--square');
  });

  it('calls the onPageChange function when an item is clicked', () => {
    render(<Pagination totalPages={10} defaultPage={5} onPageChange={onPageChange} />);

    const items = screen.getAllByRole('button');
    expect(items).toHaveLength(7);

    const nextPageItem = screen.getByLabelText('Goto Page 6');

    fireEvent.click(nextPageItem);

    expect(onPageChange).toHaveBeenCalledWith(6);
  });
});
