import { renderHook } from '@testing-library/react-hooks';
import { useDropdownStyleProps } from '../useDropdownStyleProps';

describe('useDropdownStyleProps', () => {
  it('should return defaults', () => {
    const props = { isOpen: true };
    const { result } = renderHook(() => useDropdownStyleProps(props));

    expect(result.current.wrapperClassName).toBe('Dropdown is-open');
    expect(result.current.triggerClassName).toBe('is-expanded');
  });
});
