import '@testing-library/jest-dom';
import { act, renderHook } from '@testing-library/react';
import { useSegmentedControl } from '../useSegmentedControl';

describe('useSegmentedControl', () => {
  it('should initialize with default item value selected', () => {
    const { result } = renderHook(() =>
      useSegmentedControl({
        defaultSelectedValue: 'option1',
        isMultiselect: false,
      }),
    );

    expect(result.current.selectedValue).toBe('option1');
  });

  it('should initialize with multiple items selected', () => {
    const { result } = renderHook(() =>
      useSegmentedControl({
        defaultSelectedValue: ['option1', 'option2'],
        isMultiselect: true,
      }),
    );

    expect(result.current.selectedValue).toEqual(['option1', 'option2']);
  });

  it('should update selected value on selection change', () => {
    const { result } = renderHook(() =>
      useSegmentedControl({
        defaultSelectedValue: 'option1',
        isMultiselect: false,
      }),
    );

    act(() => {
      result.current.setSelectedValue('option2');
    });

    expect(result.current.selectedValue).toBe('option2');
  });

  it('should update selected values on selection change for multiple selection', () => {
    const { result } = renderHook(() =>
      useSegmentedControl({
        defaultSelectedValue: ['option1'],
        isMultiselect: true,
      }),
    );

    act(() => {
      result.current.setSelectedValue(['option2', 'option3']);
    });

    expect(result.current.selectedValue).toEqual(['option2', 'option3']);
  });

  it('should initialize with empty array when no default selected value is provided', () => {
    const { result } = renderHook(() =>
      useSegmentedControl({
        defaultSelectedValue: [],
        isMultiselect: true,
      }),
    );

    expect(result.current.selectedValue).toEqual([]);
  });

  it('should initialize with empty string when no default selected value is provided', () => {
    const { result } = renderHook(() =>
      useSegmentedControl({
        defaultSelectedValue: '',
        isMultiselect: false,
      }),
    );

    expect(result.current.selectedValue).toBe('');
  });

  it('should initialize with empty array when default selected value is undefined', () => {
    const { result } = renderHook(() =>
      useSegmentedControl({
        defaultSelectedValue: undefined,
        isMultiselect: true,
      }),
    );

    expect(result.current.selectedValue).toEqual([]);
  });

  it('should initialize with empty string when default selected value is null', () => {
    const { result } = renderHook(() =>
      useSegmentedControl({
        defaultSelectedValue: undefined,
        isMultiselect: false,
      }),
    );

    expect(result.current.selectedValue).toBe('');
  });
});
