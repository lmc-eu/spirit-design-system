import { renderHook } from '@testing-library/react-hooks';
import { DropdownPlacements } from '../../../types';
import { useDropdownStyleProps, UseDropdownStyleProps } from '../useDropdownStyleProps';

describe('useDropdownStyleProps', () => {
  it('should return defaults', () => {
    const props = { isOpen: true, isFullWidth: false, placement: 'bottom-left' } as UseDropdownStyleProps;
    const { result } = renderHook(() => useDropdownStyleProps(props));

    expect(result.current.classProps.contentClassName).toBe('Dropdown is-open Dropdown--bottom Dropdown--left');
    expect(result.current.classProps.wrapperClassName).toBe('DropdownWrapper');
    expect(result.current.classProps.triggerClassName).toBe('is-expanded');
  });

  it('should transfer additional props', () => {
    const props = {
      isOpen: false,
      /** @deprecated Will be removed in next major version */
      isFullWidth: false,
      placement: DropdownPlacements.BOTTOM_LEFT,
      transferProp: 'test',
    };
    const { result } = renderHook(() => useDropdownStyleProps(props));

    expect(result.current.props).toEqual({ transferProp: 'test' });
  });

  it('should set `fullWidth` class', () => {
    const props = {
      isOpen: false,
      /** @deprecated Will be removed in next major version */
      isFullWidth: true,
      placement: DropdownPlacements.BOTTOM_LEFT,
    };
    const { result } = renderHook(() => useDropdownStyleProps(props));

    expect(result.current.classProps.contentClassName).toBe(
      'Dropdown Dropdown--fullWidth Dropdown--bottom Dropdown--left',
    );
  });

  it('should change placement class', () => {
    const props = {
      isOpen: false,
      /** @deprecated Will be removed in next major version */
      isFullWidth: false,
      placement: DropdownPlacements.TOP_RIGHT,
    };
    const { result } = renderHook(() => useDropdownStyleProps(props));

    expect(result.current.classProps.contentClassName).toBe('Dropdown Dropdown--top Dropdown--right');
  });
});
