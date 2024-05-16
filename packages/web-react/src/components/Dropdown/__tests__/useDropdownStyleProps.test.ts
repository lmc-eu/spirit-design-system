import { renderHook } from '@testing-library/react-hooks';
import { useDropdownStyleProps } from '../useDropdownStyleProps';

describe('useDropdownStyleProps', () => {
  it('should return defaults', () => {
    const { result } = renderHook(() => useDropdownStyleProps());

    expect(result.current.classProps.root).toBe('Dropdown');
    expect(result.current.classProps.popover).toBe('DropdownPopover');
  });

  it('should render as open', () => {
    const props = {
      isOpen: true,
    };
    const { result } = renderHook(() => useDropdownStyleProps(props));

    expect(result.current.classProps.popover).toBe('DropdownPopover is-open');
    expect(result.current.classProps.trigger).toBe('is-expanded');
  });

  it('should transfer additional props', () => {
    const props = {
      isOpen: false,
      transferProp: 'test',
    };
    const { result } = renderHook(() => useDropdownStyleProps(props));

    expect(result.current.classProps.popover).toBe('DropdownPopover');
    expect(result.current.props).toEqual({ transferProp: 'test' });
  });
});
