import { renderHook } from '@testing-library/react';
import { PlacementDictionaryType } from '../../../types';
import { useDropdownAriaProps } from '../useDropdownAriaProps';

describe('useDropdownAriaProps', () => {
  it('should return defaults', () => {
    const props = {
      fullWidthMode: undefined,
      id: 'test-dropdown-id',
      isOpen: true,
      placement: 'bottom-start' as PlacementDictionaryType,
      toggleHandler: () => null,
    };
    const { result } = renderHook(() => useDropdownAriaProps(props));

    expect(result.current.triggerProps).toBeDefined();
    expect(result.current.triggerProps['aria-expanded']).toBeDefined();
    expect(result.current.triggerProps['aria-controls']).toBeDefined();
    expect(result.current.triggerProps.onClick).toBeDefined();
    expect(result.current.contentProps).toBeDefined();
    expect(result.current.contentProps['data-spirit-placement']).toBeDefined();
    expect(result.current.contentProps['data-spirit-placement']).toBe('bottom-start');
  });
});
