import { act, renderHook } from '@testing-library/react';
import { useToggle } from '../useToggle';

describe('useToggle', () => {
  it('should return defaults', () => {
    const { result } = renderHook(() => useToggle());
    const [state, toggle] = result.current;

    expect(state).toBeFalsy();
    expect(typeof toggle).toBe('function');
  });

  it('should toggle state', () => {
    const { result } = renderHook(() => useToggle());
    const [, toggle] = result.current;

    act(() => {
      toggle();
    });

    const [state] = result.current;

    expect(state).toBeTruthy();
  });
});
