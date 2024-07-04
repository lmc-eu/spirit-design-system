import { renderHook } from '@testing-library/react';
import { Sizes } from '../../../constants';
import { usePartnerLogoStyleProps } from '../usePartnerLogoStyleProps';

describe('usePartnerLogoStyleProps', () => {
  it('should return defaults', () => {
    const props = {};
    const { result } = renderHook(() => usePartnerLogoStyleProps(props));

    expect(result.current.classProps).toBe('UNSTABLE_PartnerLogo');
  });

  it.each(Object.values(Sizes))('should return %s size PartnerLogo', (size) => {
    const props = { size };
    const { result } = renderHook(() => usePartnerLogoStyleProps(props));

    expect(result.current.classProps).toBe(`UNSTABLE_PartnerLogo UNSTABLE_PartnerLogo--${size}`);
  });

  it('should return without safe area', () => {
    const props = { hasSafeAreaDisabled: true };
    const { result } = renderHook(() => usePartnerLogoStyleProps(props));

    expect(result.current.classProps).toBe('UNSTABLE_PartnerLogo UNSTABLE_PartnerLogo--hasSafeAreaDisabled');
  });
});
