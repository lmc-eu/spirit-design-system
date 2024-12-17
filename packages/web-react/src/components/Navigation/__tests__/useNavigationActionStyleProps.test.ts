import { renderHook } from '@testing-library/react';
import { SpiritNavigationActionProps } from '../../../types';
import { useNavigationActionStyleProps } from '../useNavigationActionStyleProps';

describe('useNavigationActionStyleProps', () => {
  it('should return defaults', () => {
    const props = {};
    const { result } = renderHook(() => useNavigationActionStyleProps(props));

    expect(result.current.classProps).toBe('NavigationAction');
  });

  it('should return disabled class', () => {
    const props: SpiritNavigationActionProps = { isDisabled: true };
    const { result } = renderHook(() => useNavigationActionStyleProps(props));

    expect(result.current.classProps).toBe('NavigationAction NavigationAction--disabled');
  });

  it('should return selected class', () => {
    const props = { isSelected: true };
    const { result } = renderHook(() => useNavigationActionStyleProps(props));

    expect(result.current.classProps).toBe('NavigationAction NavigationAction--selected');
  });
});
