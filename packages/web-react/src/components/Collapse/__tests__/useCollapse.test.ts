import { act, renderHook } from '@testing-library/react';
import { useCollapse } from '../useCollapse';

describe('useCollapse', () => {
  it.each([[true], [false]])('should return defaults', (isOpen) => {
    const { result } = renderHook(() => useCollapse(isOpen));

    expect(result.current.isOpen).toBe(isOpen);
    expect(typeof result.current.toggleHandler).toBe('function');
  });

  it('should toggle state', () => {
    const isOpen = true;
    const { result } = renderHook(() => useCollapse(isOpen));
    const { toggleHandler } = result.current;

    act(() => {
      // Argument of type 'Event' is not assignable to parameter of type 'ClickEvent'.
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      toggleHandler(new Event('click'));
    });

    expect(result.current.isOpen).toBe(!isOpen);
  });
});
