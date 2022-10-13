import { renderHook } from '@testing-library/react-hooks';
import { useCollapseStyleProps } from '../useCollapseStyleProps';

describe('useCollapseStyleProps', () => {
  it('should return defaults', () => {
    const props = { isCollapsed: true };
    const { result } = renderHook(() => useCollapseStyleProps(props));

    expect(result.current.wrapperClassName).toBe('Collapse is-collapsed');
    expect(result.current.contentClassName).toBe('Collapse__content');
    expect(result.current.triggerClassName).toBe('is-expanded');
  });
});
