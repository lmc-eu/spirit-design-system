import { MutableRefObject } from 'react';
import { renderHook } from '@testing-library/react-hooks';
import { useResizeHeight } from '../useResizeHeight';

describe('useResizeHeight', () => {
  it('should return simulated height', () => {
    const ref = {
      current: {
        offsetHeight: 500,
      },
    } as MutableRefObject<HTMLElement | null | undefined>;
    const { result } = renderHook(() => useResizeHeight(ref));

    expect(result.current).toBe('500px');
  });
});
