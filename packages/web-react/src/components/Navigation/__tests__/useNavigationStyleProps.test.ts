import { renderHook } from '@testing-library/react';
import { useNavigationStyleProps } from '../useNavigationStyleProps';

describe('useNavigationStyleProps', () => {
  it('should return defaults', () => {
    const props = {};
    const { result } = renderHook(() => useNavigationStyleProps(props));

    expect(result.current.classProps).toBe('Navigation');
  });
});
