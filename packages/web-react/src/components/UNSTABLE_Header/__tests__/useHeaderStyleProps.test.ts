import { renderHook } from '@testing-library/react';
import { useHeaderStyleProps } from '../useHeaderStyleProps';

describe('useHeaderStyleProps', () => {
  it('should return defaults', () => {
    const props = {};
    const { result } = renderHook(() => useHeaderStyleProps(props));

    expect(result.current.classProps.root).toBe('UNSTABLE_Header');
    expect(result.current.classProps.logo).toBe('UNSTABLE_HeaderLogo');
  });
});
