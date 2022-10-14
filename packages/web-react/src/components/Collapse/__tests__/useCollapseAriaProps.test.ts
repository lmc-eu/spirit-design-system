import { renderHook } from '@testing-library/react-hooks';
import { useCollapseAriaProps, CollapseAriaPropsProps } from '../useCollapseAriaProps';

describe('useCollapseAriaProps', () => {
  it('should return defaults', () => {
    const props = {
      id: 'test-collapse-id',
      isCollapsed: true,
      onClick: () => null,
      toggleHandler: () => null,
    };
    const { result } = renderHook(() => useCollapseAriaProps(props));

    expect(result.current.wrapperProps).toBeDefined();
    expect(result.current.wrapperProps.style).toBeDefined();
    expect(result.current.wrapperProps['data-breakpoint']).toBeUndefined();
    expect(result.current.contentProps).toBeDefined();
    expect(result.current.contentProps.ref).toBeDefined();
    expect(result.current.triggerProps).toBeDefined();
    expect(result.current.triggerProps['aria-expanded']).toBeDefined();
    expect(result.current.triggerProps['aria-controls']).toBeDefined();
    expect(result.current.triggerProps.onClick).toBeDefined();
  });

  it('should return breakpoints', () => {
    const props = {
      id: 'test-collapse-id',
      isCollapsed: false,
      toggleHandler: () => null,
      collapsibleToBreakpoint: 'mobile',
    } as CollapseAriaPropsProps;
    const { result } = renderHook(() => useCollapseAriaProps(props));

    expect(result.current.wrapperProps).toBeDefined();
    expect(result.current.wrapperProps['data-breakpoint']).toBe('mobile');
  });
});
