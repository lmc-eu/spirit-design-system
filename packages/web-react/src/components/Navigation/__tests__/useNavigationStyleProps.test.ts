import { renderHook } from '@testing-library/react';
import { Direction } from '../../../constants';
import { SpiritNavigationActionProps } from '../../../types';
import { useNavigationStyleProps } from '../useNavigationStyleProps';

describe('useNavigationStyleProps', () => {
  it('should return defaults', () => {
    const props: SpiritNavigationActionProps = {};
    const { result } = renderHook(() => useNavigationStyleProps(props));

    expect(result.current.classProps.root).toBe('Navigation Navigation--horizontal');
    expect(result.current.classProps.action).toBe('NavigationAction');
    expect(result.current.classProps.item).toBe('NavigationItem NavigationItem--alignmentYCenter');
  });

  it('should return disabled class', () => {
    const props: SpiritNavigationActionProps = { isDisabled: true };
    const { result } = renderHook(() => useNavigationStyleProps(props));

    expect(result.current.classProps.action).toBe('NavigationAction NavigationAction--disabled');
  });

  it('should return selected class', () => {
    const props = { isSelected: true };
    const { result } = renderHook(() => useNavigationStyleProps(props));

    expect(result.current.classProps.action).toBe('NavigationAction NavigationAction--selected');
  });

  it('should return alignment class', () => {
    const props = { alignmentY: 'stretch' };
    const { result } = renderHook(() => useNavigationStyleProps(props));

    expect(result.current.classProps.item).toBe('NavigationItem NavigationItem--alignmentYStretch');
  });

  it('should return if navigation is vertical', () => {
    const props = { direction: Direction.VERTICAL };
    const { result } = renderHook(() => useNavigationStyleProps(props));

    expect(result.current.classProps.root).toBe('Navigation Navigation--vertical');
  });
});
