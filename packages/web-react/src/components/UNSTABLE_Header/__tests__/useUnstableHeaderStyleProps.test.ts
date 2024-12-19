import { renderHook } from '@testing-library/react';
import { useUnstableHeaderStyleProps } from '../useUnstableHeaderStyleProps';

describe('useUnstableHeaderStyleProps', () => {
  it('should return defaults', () => {
    const props = {};
    const { result } = renderHook(() => useUnstableHeaderStyleProps(props));

    expect(result.current.classProps.root).toBe('UNSTABLE_Header');
    expect(result.current.classProps.logo).toBe('UNSTABLE_HeaderLogo');
  });
});
