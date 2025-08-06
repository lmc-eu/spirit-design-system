import { renderHook } from '@testing-library/react';
import { useDrawerStyleProps } from '../useDrawerStyleProps';

describe('useDrawerStyleProps', () => {
  it('should return defaults', () => {
    const { result } = renderHook(() => useDrawerStyleProps({}));

    expect(result.current.classProps.root).toBe('Drawer Drawer--right');
    expect(result.current.classProps.panel).toBe('DrawerPanel');
    expect(result.current.classProps.content).toBe('DrawerPanel__content');
    expect(result.current.classProps.closeButton).toBe('DrawerCloseButton');
  });

  it('should return custom alignment', () => {
    const { result } = renderHook(() => useDrawerStyleProps({ drawerAlignmentX: 'left' }));

    expect(result.current.classProps.root).toBe('Drawer Drawer--left');
    expect(result.current.classProps.panel).toBe('DrawerPanel');
  });
});
