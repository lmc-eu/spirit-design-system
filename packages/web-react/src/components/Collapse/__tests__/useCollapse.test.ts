import { renderHook } from '@testing-library/react-hooks';
import { useCollapse } from '../useCollapse';

describe('useCollapse', () => {
  it('should return defaults', () => {
    const props = { isCollapsed: true };
    const { result } = renderHook(() => useCollapse(props));

    expect(result.current.collapsed).toBe(true);
    expect(typeof result.current.toggleHandler).toBe('function');
  });
});
