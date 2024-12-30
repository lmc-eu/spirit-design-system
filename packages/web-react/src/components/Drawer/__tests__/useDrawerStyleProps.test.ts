import { renderHook } from '@testing-library/react';
import { useDrawerStyleProps } from '../useDrawerStyleProps';

describe('useDrawerStyleProps', () => {
  it('should return defaults', () => {
    const { result } = renderHook(() => useDrawerStyleProps({}));

    expect(result.current.classProps.root).toBe('Drawer');
    expect(result.current.classProps.dialog).toBe('DrawerDialog');
  });

  it('should return custom alignment', () => {
    const { result } = renderHook(() => useDrawerStyleProps({ drawerAlignment: 'left' }));

    expect(result.current.classProps.root).toBe('Drawer Drawer--left');
    expect(result.current.classProps.dialog).toBe('DrawerDialog');
  });
});
