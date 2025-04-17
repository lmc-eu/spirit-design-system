import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';
import { classNamePrefixProviderTest, restPropsTest, stylePropsTest, validHtmlAttributesTest } from '@local/tests';
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

    const input = screen.getByRole('radio') as HTMLInputElement;

    expect(input).toBeDisabled();
  });

  it('should call onChange when clicked', () => {
    const handleChange = jest.fn();

    render(
      <SegmentedControlItem id="option-1" value="1" onChange={handleChange}>
        Item 1
      </SegmentedControlItem>,
    );

    const input = screen.getByRole('radio') as HTMLInputElement;

    fireEvent.click(input);

    expect(handleChange).toHaveBeenCalled();
  });
});
