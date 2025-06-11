import { renderHook } from '@testing-library/react';
import { useDimensionStyle } from '../useDimensionStyle';

describe('useDimensionStyle', () => {
  it('should return CSS property for single value', () => {
    const { result } = renderHook(() => useDimensionStyle(5, 'spirit-dimension'));

    expect(result.current).toEqual({ '--spirit-dimension': '5' });
  });

  it('should return CSS properties for breakpoints', () => {
    const property = { mobile: 1, tablet: 2, desktop: 3 };
    const { result } = renderHook(() => useDimensionStyle(property, 'spirit-dimension'));

    expect(result.current).toEqual({
      '--spirit-dimension': '1',
      '--spirit-dimension-tablet': '2',
      '--spirit-dimension-desktop': '3',
    });
  });

  it('should return empty style object when property is undefined', () => {
    const { result } = renderHook(() => useDimensionStyle(undefined, 'spirit-dimension'));

    expect(result.current).toEqual({});
  });

  it('should return empty style object when property is empty object', () => {
    const { result } = renderHook(() => useDimensionStyle({}, 'spirit-dimension'));

    expect(result.current).toEqual({});
  });
});
