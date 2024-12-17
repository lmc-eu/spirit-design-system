import { renderHook } from '@testing-library/react';
import { useNavigationStyleProps } from '../useNavigationStyleProps';

describe('useNavigationStyleProps', () => {
  it('should return defaults', () => {
    const { result } = renderHook(() => useNavigationStyleProps());

    expect(result.current.classProps).toBe('Navigation');
  });
});
