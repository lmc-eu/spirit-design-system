import { renderHook } from '@testing-library/react-hooks';
import { useCollapseAriaProps } from '../useCollapseAriaProps';

describe('useCollapseAriaProps', () => {
  it('should return defaults', () => {
    const props = {
      id: 'test-collapse-id',
      isCollapsed: true,
    };
    const { result } = renderHook(() => useCollapseAriaProps(props));

    expect(result.current.wrapperProps).toBeTruthy();
    expect(result.current.contentProps).toBeTruthy();
    expect(result.current.triggerProps).toBeTruthy();
  });
});
