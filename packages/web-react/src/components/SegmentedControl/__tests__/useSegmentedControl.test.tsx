import '@testing-library/jest-dom';
import { act, renderHook } from '@testing-library/react';
import React from 'react';
import SegmentedControlItem from '../SegmentedControlItem';
import { useSegmentedControl } from '../useSegmentedControl';

describe('useSegmentedControl', () => {
  it('should initialize with the first item value selected', () => {
    const { result } = renderHook(() =>
      useSegmentedControl({
        children: (
          <>
            <SegmentedControlItem value="option1">Option 1</SegmentedControlItem>
            <SegmentedControlItem value="option2">Option 2</SegmentedControlItem>
            <SegmentedControlItem value="option3">Option 3</SegmentedControlItem>
          </>
        ),
        hasMultipleSelection: false,
      }),
    );

    expect(result.current.selectedValue).toEqual(['option1']);
  });

  it('should allow changing selected value', () => {
    const { result } = renderHook(() =>
      useSegmentedControl({
        children: (
          <>
            <SegmentedControlItem value="option1">Option 1</SegmentedControlItem>
            <SegmentedControlItem value="option2">Option 2</SegmentedControlItem>
            <SegmentedControlItem value="option3">Option 3</SegmentedControlItem>
          </>
        ),
        hasMultipleSelection: false,
      }),
    );

    act(() => {
      result.current.setSelectedValue('option2');
    });

    expect(result.current.selectedValue).toEqual(['option2']);
  });

  it('should handle multiple selection', () => {
    const { result } = renderHook(() =>
      useSegmentedControl({
        children: (
          <>
            <SegmentedControlItem value="option1">Option 1</SegmentedControlItem>
            <SegmentedControlItem value="option2">Option 2</SegmentedControlItem>
            <SegmentedControlItem value="option3">Option 3</SegmentedControlItem>
          </>
        ),
        hasMultipleSelection: true,
      }),
    );

    expect(result.current.selectedValue).toEqual(['option1']);

    act(() => {
      result.current.setSelectedValue('option3');
    });

    expect(result.current.selectedValue).toEqual(['option1', 'option3']);

    act(() => {
      result.current.setSelectedValue('option1');
    });

    expect(result.current.selectedValue).toEqual(['option3']);
  });

  it('should select default item if first item is disabled', () => {
    const { result } = renderHook(() =>
      useSegmentedControl({
        children: (
          <>
            <SegmentedControlItem value="option1" isDisabled>
              Option 1
            </SegmentedControlItem>
            <SegmentedControlItem value="option2">Option 2</SegmentedControlItem>
          </>
        ),
        hasMultipleSelection: false,
      }),
    );

    expect(result.current.selectedValue).toEqual(['option2']);
  });

  it('should select default item if first item is disabled and multiple selection is enabled', () => {
    const { result } = renderHook(() =>
      useSegmentedControl({
        children: (
          <>
            <SegmentedControlItem value="option1" isDisabled>
              Option 1
            </SegmentedControlItem>
            <SegmentedControlItem value="option2">Option 2</SegmentedControlItem>
          </>
        ),
        hasMultipleSelection: true,
      }),
    );

    expect(result.current.selectedValue).toEqual(['option2']);
  });

  it('should render with default selected item', () => {
    const { result } = renderHook(() =>
      useSegmentedControl({
        children: (
          <>
            <SegmentedControlItem value="option1">Option 1</SegmentedControlItem>
            <SegmentedControlItem value="option2" isDefaultSelected>
              Option 2
            </SegmentedControlItem>
          </>
        ),
        hasMultipleSelection: false,
      }),
    );

    expect(result.current.selectedValue).toEqual(['option2']);
  });

  it('should initialize with multiple default selected items when multiple selection is enabled', () => {
    const { result } = renderHook(() =>
      useSegmentedControl({
        children: (
          <>
            <SegmentedControlItem value="option1">Option 1</SegmentedControlItem>
            <SegmentedControlItem value="option2" isDefaultSelected>
              Option 2
            </SegmentedControlItem>
            <SegmentedControlItem value="option3" isDefaultSelected>
              Option 3
            </SegmentedControlItem>
          </>
        ),
        hasMultipleSelection: true,
      }),
    );

    expect(result.current.selectedValue).toEqual(['option2', 'option3']);
  });
});
