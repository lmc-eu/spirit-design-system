import { renderHook } from '@testing-library/react';
import { useProductLogoStyleProps } from '../useProductLogoStyleProps';

describe('useProductLogoStyleProps', () => {
  it('should return defaults', () => {
    const props = {};
    const { result } = renderHook(() => useProductLogoStyleProps(props));

    expect(result.current.classProps).toBe('UNSTABLE_ProductLogo');
  });

  describe('isInverted prop', () => {
    const props = {
      isInverted: true,
    };
    const { result } = renderHook(() => useProductLogoStyleProps(props));

    it('should return inverted class names', () => {
      expect(result.current.classProps).toBe('UNSTABLE_ProductLogo UNSTABLE_ProductLogo--inverted');
    });

    it('should not return isInverted prop', () => {
      expect(result.current.props).toStrictEqual({});
    });
  });
});
