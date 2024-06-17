import { act, renderHook } from '@testing-library/react';
import { useTab } from '../useTabs';

describe('useTab', () => {
  it('should return defaults', () => {
    const { result } = renderHook(() => useTab(1));
    const { selectedId, selectTab } = result.current;

    expect(selectedId).toBe(1);
    expect(typeof selectTab).toBe('function');
  });

  it('should selectTab state', () => {
    const { result } = renderHook(() => useTab(1));
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { selectedId: _, selectTab } = result.current;

    act(() => {
      selectTab(2);
    });

    const { selectedId } = result.current;

    expect(selectedId).toBe(2);
  });
});
