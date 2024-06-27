import { renderHook } from '@testing-library/react';
import { useProductLogoStyleProps } from '../useProductLogoStyleProps';

describe('useProductLogoStyleProps', () => {
  it('should return defaults', () => {
    const props = {};
    const { result } = renderHook(() => useProductLogoStyleProps(props));

    expect(result.current.classProps).toBe('UNSTABLE_ProductLogo');
  });

  it('should return inverted', () => {
    const props = {
      isInverted: true,
    };
    const { result } = renderHook(() => useProductLogoStyleProps(props));

    expect(result.current.classProps).toBe('UNSTABLE_ProductLogo UNSTABLE_ProductLogo--inverted');
  });
});
