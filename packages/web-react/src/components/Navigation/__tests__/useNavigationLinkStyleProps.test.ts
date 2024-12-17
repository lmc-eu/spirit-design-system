import { renderHook } from '@testing-library/react';
import { SpiritNavigationLinkProps } from '../../../types';
import { useNavigationLinkStyleProps } from '../useNavigationLinkStyleProps';

describe('useNavigationLinkStyleProps', () => {
  it('should return defaults', () => {
    const props = {};
    const { result } = renderHook(() => useNavigationLinkStyleProps(props));

    expect(result.current.classProps).toBe('NavigationLink');
  });

  it('should return disabled class', () => {
    const props: SpiritNavigationLinkProps = { isDisabled: true };
    const { result } = renderHook(() => useNavigationLinkStyleProps(props));

    expect(result.current.classProps).toBe('NavigationLink NavigationLink--disabled');
  });

  it('should return selected class', () => {
    const props = { isSelected: true };
    const { result } = renderHook(() => useNavigationLinkStyleProps(props));

    expect(result.current.classProps).toBe('NavigationLink NavigationLink--selected');
  });
});
