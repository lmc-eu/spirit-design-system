import { act, renderHook } from '@testing-library/react-hooks';
import { useTab } from '../useTabs';

describe('useTab', () => {
  it('should return defaults', () => {
    const { result } = renderHook(() => useTab(1));
    const { selectedTabId, selectTab } = result.current;

    expect(selectedTabId).toBe(1);
    expect(typeof selectTab).toBe('function');
  });

  it('should selectTab state', () => {
    const { result } = renderHook(() => useTab(1));
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { selectedTabId: _, selectTab } = result.current;

    act(() => {
      selectTab(2);
    });

    const { selectedTabId } = result.current;

    expect(selectedTabId).toBe(2);
  });
});
