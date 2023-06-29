import { renderHook } from '@testing-library/react-hooks';
import { useDropdownAriaProps } from '../useDropdownAriaProps';

describe('useDropdownAriaProps', () => {
  it('should return defaults', () => {
    const props = {
      fullWidthMode: undefined,
      id: 'test-dropdown-id',
      isOpen: true,
      toggleHandler: () => null,
    };
    const { result } = renderHook(() => useDropdownAriaProps(props));

    expect(result.current.triggerProps).toBeDefined();
    expect(result.current.triggerProps['aria-expanded']).toBeDefined();
    expect(result.current.triggerProps['aria-controls']).toBeDefined();
    expect(result.current.triggerProps.onClick).toBeDefined();
  });
});
