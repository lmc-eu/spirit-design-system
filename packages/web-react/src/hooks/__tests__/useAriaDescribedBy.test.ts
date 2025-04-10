import { renderHook } from '@testing-library/react';
import { useAriaDescribedBy } from '../useAriaDescribedBy';

describe('useAriaDescribedBy', () => {
  it('should return an empty object when ids array is empty', () => {
    const { result } = renderHook(() => useAriaDescribedBy([]));
    expect(result.current).toEqual({});
  });

  it('should return an object with aria-describedby for a single ID', () => {
    const { result } = renderHook(() => useAriaDescribedBy(['id1']));
    expect(result.current).toEqual({ 'aria-describedby': 'id1' });
  });

  it('should return an object with aria-describedby for multiple IDs', () => {
    const { result } = renderHook(() => useAriaDescribedBy(['id1', 'id2', 'id3']));
    expect(result.current).toEqual({ 'aria-describedby': 'id1 id2 id3' });
  });

  it('should return the same object reference if ids array does not change', () => {
    const ids = ['id1', 'id2'];
    const { result, rerender } = renderHook(() => useAriaDescribedBy(ids));

    const firstResult = result.current;
    rerender();
    const secondResult = result.current;

    expect(firstResult).toBe(secondResult);
  });

  it('should return a new object reference if ids array changes', () => {
    const { result, rerender } = renderHook(({ ids }) => useAriaDescribedBy(ids), {
      initialProps: { ids: ['id1', 'id2'] },
    });

    const firstResult = result.current;
    rerender({ ids: ['id1', 'id2', 'id3'] });
    const secondResult = result.current;

    expect(firstResult).not.toBe(secondResult);
    expect(secondResult).toEqual({ 'aria-describedby': 'id1 id2 id3' });
  });
});
