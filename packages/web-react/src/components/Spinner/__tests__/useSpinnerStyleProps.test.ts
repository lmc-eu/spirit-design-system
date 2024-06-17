import { renderHook } from '@testing-library/react';
import { TextColors } from '../../../constants';
import { SpiritSpinnerProps } from '../../../types';
import { useSpinnerStyleProps } from '../useSpinnerStyleProps';

describe('useSpinnerStyleProps', () => {
  it('should return defaults', () => {
    const props = {};
    const { result } = renderHook(() => useSpinnerStyleProps(props));

    expect(result.current.classProps).toBe('animation-spin-clockwise');
  });

  it.each([Object.values(TextColors)])('should return color %s', (state) => {
    const props = { color: state } as SpiritSpinnerProps;
    const { result } = renderHook(() => useSpinnerStyleProps(props));

    expect(result.current.classProps).toBe(`text-${state} animation-spin-clockwise`);
  });
});
