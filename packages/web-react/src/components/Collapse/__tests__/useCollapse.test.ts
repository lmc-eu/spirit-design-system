import { act, renderHook } from '@testing-library/react-hooks';
import { useCollapse } from '../useCollapse';

describe('useCollapse', () => {
  it.each([[true], [false]])('should return defaults', (isCollapsed) => {
    const { result } = renderHook(() => useCollapse(isCollapsed));

    expect(result.current.collapsed).toBe(isCollapsed);
    expect(typeof result.current.toggleHandler).toBe('function');
  });

  it('should toggle state', () => {
    const isCollapsed = true;
    const { result } = renderHook(() => useCollapse(isCollapsed));
    const { toggleHandler } = result.current;

    act(() => {
      // Argument of type 'Event' is not assignable to parameter of type 'ClickEvent'.
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      toggleHandler(new Event('click'));
    });

    const { collapsed } = result.current;

    expect(collapsed).toBe(!isCollapsed);
  });
});
