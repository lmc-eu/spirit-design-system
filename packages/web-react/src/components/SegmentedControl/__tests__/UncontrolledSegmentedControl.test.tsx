import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import { FillVariants } from '../../../constants';
import SegmentedControlItem from '../SegmentedControlItem';
import UncontrolledSegmentedControl from '../UncontrolledSegmentedControl';

describe('UncontrolledSegmentedControl', () => {
  describe.each<string | undefined>([undefined, ...Object.values(FillVariants)])('%s variant', (variant) => {
    it('should render label as visually hidden', () => {
      render(
        <UncontrolledSegmentedControl name="test" label="Test label" variant={variant}>
          <SegmentedControlItem id="option-1" value="1">
            Item 1
          </SegmentedControlItem>
        </UncontrolledSegmentedControl>,
      );

      const label = screen.getByText('Test label');

      expect(label).toBeInTheDocument();
      expect(label).toHaveClass('accessibility-hidden');
    });

    it('should render children', () => {
      render(
        <UncontrolledSegmentedControl name="test" label="Test label" variant={variant}>
          <SegmentedControlItem id="option-1" value="1">
            Item 1
          </SegmentedControlItem>
        </UncontrolledSegmentedControl>,
      );

      expect(screen.getByText('Item 1')).toBeInTheDocument();
    });

    it('should respect default selected value', () => {
      render(
        <UncontrolledSegmentedControl name="test" label="Test label" variant={variant} defaultSelectedValue="2">
          <SegmentedControlItem id="option-1" value="1">
            Item 1
          </SegmentedControlItem>
          <SegmentedControlItem id="option-2" value="2">
            Item 2
          </SegmentedControlItem>
        </UncontrolledSegmentedControl>,
      );

      const input1 = screen.getByLabelText('Item 1') as HTMLInputElement;
      const input2 = screen.getByLabelText('Item 2') as HTMLInputElement;

      expect(input1.checked).toBe(false);
      expect(input2.checked).toBe(true);
    });

    it('should call onSelectionChange when value changes', () => {
      const handleChange = jest.fn();

      render(
        <UncontrolledSegmentedControl name="test" label="Test label" variant={variant} onSelectionChange={handleChange}>
          <SegmentedControlItem id="option-1" value="1">
            Item 1
          </SegmentedControlItem>
          <SegmentedControlItem id="option-2" value="2">
            Item 2
          </SegmentedControlItem>
        </UncontrolledSegmentedControl>,
      );

      const input2 = screen.getByLabelText('Item 2') as HTMLInputElement;

      fireEvent.click(input2);

      expect(handleChange).toHaveBeenCalledWith('2');
    });

    it('should allow multiple selection when isMultiselect is true', () => {
      render(
        <UncontrolledSegmentedControl
          name="test"
          label="Test label"
          variant={variant}
          isMultiselect
          defaultSelectedValue={['1']}
        >
          <SegmentedControlItem id="option-1" value="1">
            Item 1
          </SegmentedControlItem>
          <SegmentedControlItem id="option-2" value="2">
            Item 2
          </SegmentedControlItem>
        </UncontrolledSegmentedControl>,
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

    it('should render with fluid class', () => {
      render(
        <UncontrolledSegmentedControl name="test" label="Test label" isFluid variant={FillVariants.FILL}>
          <SegmentedControlItem id="option-1" value="1">
            Item 1
          </SegmentedControlItem>
        </UncontrolledSegmentedControl>,
      );

      const input = screen.getByRole('group');

      expect(input).toHaveClass('SegmentedControl--fluid');
    });

    it('should not change selection if item is disabled', () => {
      render(
        <UncontrolledSegmentedControl name="test" label="Test label" variant={variant}>
          <SegmentedControlItem id="option-1" value="1" isDisabled>
            Item 1
          </SegmentedControlItem>
          <SegmentedControlItem id="option-2" value="2">
            Item 2
          </SegmentedControlItem>
        </UncontrolledSegmentedControl>,
      );

      const input1 = screen.getByLabelText('Item 1') as HTMLInputElement;
      const input2 = screen.getByLabelText('Item 2') as HTMLInputElement;

      fireEvent.click(input1); // should not change state
      fireEvent.click(input2);

      expect(input1.checked).toBe(false);
      expect(input2.checked).toBe(true);
    });
  });
});
