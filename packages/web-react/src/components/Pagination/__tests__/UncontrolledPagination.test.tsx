import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import UncontrolledPagination from '../UncontrolledPagination';

describe('UncontrolledPagination', () => {
  const onPageChange = jest.fn();

  beforeAll(() => {
    jest.spyOn(global.console, 'warn').mockImplementation((message: string) => {
      if (
        !message.includes(
          'icon is missing from your assets or icon map provided by the IconsProvider. Please make sure you have provided all icons needed by used components.',
        )
      ) {
        throw new Error(message);
      }
    });
  });

  afterAll(() => {
    jest.restoreAllMocks();
  });

  beforeEach(() => {
    onPageChange.mockClear();
  });

  it('renders pagination items with test page selected', () => {
    render(
      <UncontrolledPagination accessibilityLabel="test page" totalPages={10} defaultPage={5} onChange={onPageChange} />,
    );

    const items = screen.getAllByRole('button');
    expect(items).toHaveLength(2);

    const selectedPageItem = screen.getByText('test page 5').parentElement;
    expect(selectedPageItem).toHaveClass('Pagination__link Pagination__link--current');
  });

  it('renders disabled items for the first and last page', () => {
    const { container } = render(
      <UncontrolledPagination accessibilityLabel="test page" totalPages={10} defaultPage={1} onChange={onPageChange} />,
    );

    const items = screen.getAllByRole('button');
    expect(items).toHaveLength(1);

    const firstPageItem = screen.getByText('test page 1').parentElement;
    const lastItemPage = container.querySelector('.Button--symmetrical');

    expect(firstPageItem).toHaveClass('Pagination__link Pagination__link--current');
    expect(lastItemPage).toHaveClass('Button Button--secondary Button--medium Button--symmetrical');
  });

  it('calls the onPageChange function when an item is clicked', () => {
    render(
      <UncontrolledPagination accessibilityLabel="test page" totalPages={10} defaultPage={5} onChange={onPageChange} />,
    );

    const items = screen.getAllByRole('button');
    expect(items).toHaveLength(2);

    const nextPageItem = screen.getByText('test page 6');

    fireEvent.click(nextPageItem);

    expect(onPageChange).toHaveBeenCalledWith(6);
  });
});
