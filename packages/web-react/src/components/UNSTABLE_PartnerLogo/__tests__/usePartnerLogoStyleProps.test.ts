import { renderHook } from '@testing-library/react';
import { Sizes } from '../../../constants';
import { usePartnerLogoStyleProps } from '../usePartnerLogoStyleProps';

describe('usePartnerLogoStyleProps', () => {
  it('should return defaults', () => {
    const props = {};
    const { result } = renderHook(() => usePartnerLogoStyleProps(props));

    expect(result.current.classProps).toBe('UNSTABLE_PartnerLogo');
  });

  describe('hasSafeAreaDisabled prop', () => {
    const props = {
      hasSafeAreaDisabled: true,
    };
    const { result } = renderHook(() => usePartnerLogoStyleProps(props));

    it('should return hasSafeAreaDisabled class names', () => {
      expect(result.current.classProps).toBe('UNSTABLE_PartnerLogo UNSTABLE_PartnerLogo--hasSafeAreaDisabled');
    });

    it('should not return hasSafeAreaDisabled prop', () => {
      expect(result.current.props).toStrictEqual({});
    });
  });

  describe.each(Object.values(Sizes))('size prop', (size) => {
    const props = { size };
    const { result } = renderHook(() => usePartnerLogoStyleProps(props));

    it('should return %s size PartnerLogo', () => {
      expect(result.current.classProps).toBe(`UNSTABLE_PartnerLogo UNSTABLE_PartnerLogo--${size}`);
    });

    it('should not return size prop', () => {
      expect(result.current.props).toStrictEqual({});
    });
  });
});
