import { renderHook } from '@testing-library/react';
import { useDropdown } from '../useDropdown';

describe('useDropdown', () => {
  it('should return defaults', () => {
    const props = {
      dropdownRef: {
        current: jest.fn() as unknown as HTMLElement,
      },
      triggerRef: {
        current: jest.fn() as unknown as HTMLElement,
      },
    };
    const { result } = renderHook(() => useDropdown(props));

    expect(result.current.isOpen).toBeFalsy();
    expect(typeof result.current.toggleHandler).toBe('function');
  });
});
