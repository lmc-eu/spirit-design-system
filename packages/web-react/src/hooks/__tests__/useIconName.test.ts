import { renderHook } from '@testing-library/react';
import { useIconName } from '../useIconName';

describe('useIconName', () => {
  it('should return default icon', () => {
    const { result } = renderHook(() => useIconName('', { default: 'default_icon' }));

    expect(result.current).toBe('default_icon');
  });

  it('should return specific icon', () => {
    const icons = { warning: '<path d="ERRW ADSFDSFDS"></path>', default: 'default_icon' };
    const { result } = renderHook(() => useIconName('warning', icons));

    expect(result.current).toBe('<path d="ERRW ADSFDSFDS"></path>');
  });
});
