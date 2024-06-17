import { renderHook } from '@testing-library/react';
import { SpiritCollapseProps } from '../../../types';
import { useCollapseAriaProps } from '../useCollapseAriaProps';

describe('useCollapseAriaProps', () => {
  it('should return defaults', () => {
    const props = {
      collapsibleToBreakpoint: undefined,
      id: 'test-collapse-id',
      isOpen: true,
    };
    const { result } = renderHook(() => useCollapseAriaProps(props));

    expect(result.current.ariaProps).toBeDefined();
    expect(result.current.ariaProps.root).toBeDefined();
    expect(result.current.ariaProps.root['data-spirit-breakpoint']).toBeUndefined();
    expect(result.current.ariaProps.trigger['aria-expanded']).toBeTruthy();
    expect(result.current.ariaProps.trigger['aria-controls']).toBe(props.id);
    expect(result.current.props.id).toBe(props.id);
  });

  it('should return breakpoints', () => {
    const props = {
      collapsibleToBreakpoint: 'mobile',
      id: 'test-collapse-id',
      isOpen: false,
    } as SpiritCollapseProps;
    const { result } = renderHook(() => useCollapseAriaProps(props));

    expect(result.current.ariaProps.root['data-spirit-breakpoint']).toBe('mobile');
  });
});
