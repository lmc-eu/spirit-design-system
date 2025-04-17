import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';
import { classNamePrefixProviderTest, restPropsTest, stylePropsTest, validHtmlAttributesTest } from '@local/tests';
import { FillVariants } from '../../../constants';
import SegmentedControl from '../SegmentedControl';
import SegmentedControlItem from '../SegmentedControlItem';

const dataProvider = [
  {
    variant: FillVariants.FILL,
  },
  {
    variant: FillVariants.OUTLINE,
  },
  {
    variant: undefined,
  },
];

describe('SegmentedControl', () => {
  classNamePrefixProviderTest(SegmentedControl, 'SegmentedControl');

  stylePropsTest(SegmentedControl);

  restPropsTest(SegmentedControl, 'fieldset');

  validHtmlAttributesTest(SegmentedControl);

  describe.each(dataProvider)('should render for $variant variant', ({ variant }) => {
    it('should render label as visually hidden', () => {
      render(<SegmentedControl name="test-control" label="Test label" variant={variant} />);

      const legend = screen.getByText('Test label');

      expect(legend).toBeInTheDocument();
    });

    it('should render children', () => {
      render(
        <SegmentedControl name="test-control" label="Test label" variant={variant}>
          Item
        </SegmentedControl>,
      );

      expect(screen.getByText('Item')).toBeInTheDocument();
    });

    it('should render with fluid class', () => {
      render(
        <SegmentedControl name="test-control" label="Test label" isFluid variant={variant}>
          Item
        </SegmentedControl>,
      );

      expect(screen.getByText('Item')).toHaveClass('SegmentedControl--fluid');
    });

    it('should check first item by default', () => {
      render(
        <SegmentedControl name="test-control" label="Test label" variant={variant}>
          <SegmentedControlItem id="option-1" value="1">
            Item 1
          </SegmentedControlItem>
          <SegmentedControlItem id="option-2" value="2">
            Item 2
          </SegmentedControlItem>
        </SegmentedControl>,
      );

      const inputs = screen.getAllByRole('radio') as HTMLInputElement[];

      expect(inputs).toHaveLength(2);
      expect(inputs[0]?.checked).toBe(true);
    });

    it('should change selected item on click (single selection)', () => {
      render(
        <SegmentedControl name="test-control" label="Test label" variant={variant}>
          <SegmentedControlItem id="option-1" value="1">
            Item 1
          </SegmentedControlItem>
          <SegmentedControlItem id="option-2" value="2">
            Item 2
          </SegmentedControlItem>
        </SegmentedControl>,
      );

      const input1 = screen.getByLabelText('Item 1') as HTMLInputElement;
      const input2 = screen.getByLabelText('Item 2') as HTMLInputElement;

      expect(input1.checked).toBe(true);
      expect(input2.checked).toBe(false);

      fireEvent.click(input2);

      expect(input1.checked).toBe(false);
      expect(input2.checked).toBe(true);
    });

    it('should allow multiple selection when hasMultipleSelection is true', () => {
      render(
        <SegmentedControl name="test-control" label="Test label" hasMultipleSelection variant={variant}>
          <SegmentedControlItem id="option-1" value="1">
            Item 1
          </SegmentedControlItem>
          <SegmentedControlItem id="option-2" value="2">
            Item 2
          </SegmentedControlItem>
        </SegmentedControl>,
      );

      const input1 = screen.getByLabelText('Item 1') as HTMLInputElement;
      const input2 = screen.getByLabelText('Item 2') as HTMLInputElement;

      expect(input1.checked).toBe(true);
      expect(input2.checked).toBe(false);

      fireEvent.click(input2);

      expect(input1.checked).toBe(true);
      expect(input2.checked).toBe(true);

      fireEvent.click(input1);

      expect(input1.checked).toBe(false);
      expect(input2.checked).toBe(true);
    });
  });

  it('should render with disabled item', () => {
    render(
      <SegmentedControl name="test-control" label="Test label">
        <SegmentedControlItem id="option-1" value="1" isDisabled>
          Item 1
        </SegmentedControlItem>
      </SegmentedControl>,
    );

    const input = screen.getByRole('radio') as HTMLInputElement;

    expect(input).toBeDisabled();
  });

  it('should correctly handle disabled item', () => {
    render(
      <SegmentedControl name="test-control" label="Test label">
        <SegmentedControlItem id="option-1" value="1" isDisabled>
          Item 1
        </SegmentedControlItem>
        <SegmentedControlItem id="option-2" value="2">
          Item 2
        </SegmentedControlItem>
      </SegmentedControl>,
    );

    const input1 = screen.getByLabelText('Item 1') as HTMLInputElement;
    const input2 = screen.getByLabelText('Item 2') as HTMLInputElement;

    expect(input1.checked).toBe(false);
    expect(input2.checked).toBe(true);

    fireEvent.click(input2);

    expect(input1.checked).toBe(false);
    expect(input2.checked).toBe(true);
  });
});
