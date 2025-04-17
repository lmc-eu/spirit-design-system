import { renderHook } from '@testing-library/react';
import { FillVariants } from '../../../constants';
import { useSegmentedControlStyleProps } from '../useSegmentedControlStyleProps';

describe('useSegmentedControlStyleProps', () => {
  it('should return defaults', () => {
    const { result } = renderHook(() => useSegmentedControlStyleProps({}));

    expect(result.current.classProps.root).toBe('SegmentedControl SegmentedControl--outline');
    expect(result.current.classProps.input).toBe('SegmentedControlItem__input');
    expect(result.current.classProps.label).toBe('SegmentedControlItem__label');
  });

  it('should return fluid class', () => {
    const { result } = renderHook(() => useSegmentedControlStyleProps({ isFluid: true }));

    expect(result.current.classProps.root).toBe('SegmentedControl SegmentedControl--outline SegmentedControl--fluid');
  });

  it('should return fill variant class', () => {
    const { result } = renderHook(() => useSegmentedControlStyleProps({ variant: FillVariants.FILL }));

    expect(result.current.classProps.root).toBe('SegmentedControl SegmentedControl--fill');
  });
});
