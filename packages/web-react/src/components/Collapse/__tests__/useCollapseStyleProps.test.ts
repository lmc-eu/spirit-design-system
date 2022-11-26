import { renderHook } from '@testing-library/react-hooks';
import { useCollapseStyleProps } from '../useCollapseStyleProps';

describe('useCollapseStyleProps', () => {
  it.each([
    [true, 'Collapse is-collapsed', 'is-expanded'],
    [false, 'Collapse', ''],
  ])('should return defaults', (isCollapsed, rootClass, triggerClass) => {
    const { result } = renderHook(() => useCollapseStyleProps(isCollapsed));

    expect(result.current.classProps.root).toBe(rootClass);
    expect(result.current.classProps.content).toBe('Collapse__content');
    expect(result.current.classProps.trigger).toBe(triggerClass);
  });
});
