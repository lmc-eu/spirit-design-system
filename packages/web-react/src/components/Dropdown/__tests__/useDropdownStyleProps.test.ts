import { renderHook } from '@testing-library/react-hooks';
import { PlacementDictionaryType } from '../../../types';
import { useDropdownStyleProps, UseDropdownStyleProps } from '../useDropdownStyleProps';

describe('useDropdownStyleProps', () => {
  it('should return defaults', () => {
    const { result } = renderHook(() => useDropdownStyleProps());

    expect(result.current.classProps.contentClassName).toBe('Dropdown Dropdown--bottomLeft');
    expect(result.current.classProps.wrapperClassName).toBe('DropdownWrapper');
  });

  it('should render as open', () => {
    const props = {
      isOpen: true,
    } as UseDropdownStyleProps;
    const { result } = renderHook(() => useDropdownStyleProps(props));

    expect(result.current.classProps.contentClassName).toBe('Dropdown Dropdown--bottomLeft is-open');
    expect(result.current.classProps.triggerClassName).toBe('is-expanded');
  });

  it('should change placement', () => {
    const props = {
      placement: 'top-right' as PlacementDictionaryType,
    } as UseDropdownStyleProps;
    const { result } = renderHook(() => useDropdownStyleProps(props));

    expect(result.current.classProps.contentClassName).toBe('Dropdown Dropdown--topRight');
  });

  it('should transfer additional props', () => {
    const props = {
      isOpen: false,
      transferProp: 'test',
    } as UseDropdownStyleProps;
    const { result } = renderHook(() => useDropdownStyleProps(props));

    expect(result.current.classProps.contentClassName).toBe('Dropdown Dropdown--bottomLeft');
    expect(result.current.props).toEqual({ transferProp: 'test' });
  });
});
