import { renderHook } from '@testing-library/react';
import { useIconBoxSize } from '../useIconBoxSize';

describe('useIconBoxSize', () => {
  it('should return defaultBoxSize when boxSize is undefined', () => {
    const { result } = renderHook(() => useIconBoxSize(undefined));

    expect(result.current).toBe(24);
  });

  it('should return boxSize when it is a number', () => {
    const { result } = renderHook(() => useIconBoxSize(30));

    expect(result.current).toBe(30);
  });

  it('should return mobile size when boxSize is an object with mobile property', () => {
    const { result } = renderHook(() => useIconBoxSize({ mobile: 20 }));

    expect(result.current).toBe(20);
  });

  it('should return defaultBoxSize when boxSize is an object without mobile property', () => {
    const { result } = renderHook(() => useIconBoxSize({ tablet: 40 }));

    expect(result.current).toBe(24);
  });
});
