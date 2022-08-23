import React, { ReactNode } from 'react';
import { renderHook } from '@testing-library/react-hooks';
import { useIcon } from '../useIcon';
import { IconsProvider } from '../../context/IconsContext';

describe('useIcon', () => {
  it('should return empty string', () => {
    const { result } = renderHook(() => useIcon(''));

    expect(result.current).toBe('');
  });

  it('should return icon path', () => {
    const icons = { warning: '<path d="ERRW ADSFDSFDS"></path>' };
    const wrapper = ({ children }: { children: ReactNode }) => <IconsProvider value={icons}>{children}</IconsProvider>;
    const { result } = renderHook(() => useIcon('warning'), { wrapper });

    expect(result.current).toBe('<path d="ERRW ADSFDSFDS"></path>');
  });
});
