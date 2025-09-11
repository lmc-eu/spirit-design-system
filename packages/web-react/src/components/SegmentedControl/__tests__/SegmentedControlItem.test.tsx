import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import { classNamePrefixProviderTest, restPropsTest, stylePropsTest, validHtmlAttributesTest } from '@local/tests';
import { SegmentedControlProvider } from '../SegmentedControlContext';
import SegmentedControlItem from '../SegmentedControlItem';

describe('SegmentedControlItem', () => {
  classNamePrefixProviderTest(SegmentedControlItem, 'SegmentedControlItem__input');

  stylePropsTest(SegmentedControlItem);

  restPropsTest(SegmentedControlItem, 'input');

  validHtmlAttributesTest(SegmentedControlItem);

  it('should render children', () => {
    render(
      <SegmentedControlItem id="option-1" value="1">
        Item 1
      </SegmentedControlItem>,
    );

    expect(screen.getByText('Item 1')).toBeInTheDocument();
  });

  it('should render with disabled state', () => {
    render(
      <SegmentedControlItem id="option-1" value="1" isDisabled>
        Item 1
      </SegmentedControlItem>,
    );

    expect(screen.getByRole('radio')).toBeDisabled();
  });

  it('should call onChange when clicked', () => {
    const mockHandleChange = jest.fn();

    render(
      <SegmentedControlProvider
        value={{
          isMultiselect: false,
          name: 'test',
          selectedValue: [],
          setSelectedValue: mockHandleChange,
        }}
      >
        <SegmentedControlItem id="option-1" value="1">
          Item 1
        </SegmentedControlItem>
      </SegmentedControlProvider>,
    );

    fireEvent.click(screen.getByRole('radio'));

    expect(mockHandleChange).toHaveBeenCalled();
  });

  it('should render with checked state', () => {
    render(
      <SegmentedControlProvider
        value={{
          isMultiselect: false,
          name: 'test',
          selectedValue: '1',
          setSelectedValue: jest.fn(),
        }}
      >
        <SegmentedControlItem id="option-1" value="1">
          Item 1
        </SegmentedControlItem>
      </SegmentedControlProvider>,
    );

    expect(screen.getByRole('radio')).toBeChecked();
  });

  it('should render with multiple selection', () => {
    render(
      <SegmentedControlProvider
        value={{
          isMultiselect: true,
          name: 'test',
          selectedValue: ['1'],
          setSelectedValue: jest.fn(),
        }}
      >
        <SegmentedControlItem id="option-1" value="1">
          Item 1
        </SegmentedControlItem>
      </SegmentedControlProvider>,
    );

    expect(screen.getByRole('checkbox')).toBeChecked();
  });
});
