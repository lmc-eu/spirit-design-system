import { renderHook } from '@testing-library/react';
import { useCollapseStyleProps } from '../useCollapseStyleProps';

describe('useCollapseStyleProps', () => {
  it.each([
    [true, 'Collapse is-open'],
    [false, 'Collapse'],
  ])('should return defaults', (isCollapsed, rootClass) => {
    const { result } = renderHook(() => useCollapseStyleProps(isCollapsed));

    expect(result.current.classProps.root).toBe(rootClass);
    expect(result.current.classProps.content).toBe('Collapse__content');
  });
});
