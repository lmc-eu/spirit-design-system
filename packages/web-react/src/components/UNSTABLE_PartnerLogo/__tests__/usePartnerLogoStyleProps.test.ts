import { renderHook } from '@testing-library/react';
import { Sizes } from '../../../constants';
import { usePartnerLogoStyleProps } from '../usePartnerLogoStyleProps';

describe('usePartnerLogoStyleProps', () => {
  it('should return defaults', () => {
    const props = {};
    const { result } = renderHook(() => usePartnerLogoStyleProps(props));

    expect(result.current.classProps).toBe('UNSTABLE_PartnerLogo');
  });

  describe('hasSafeArea prop', () => {
    const testCases = [
      { hasSafeArea: false, expectedClassName: 'UNSTABLE_PartnerLogo', description: 'should not' },
      {
        hasSafeArea: true,
        expectedClassName: 'UNSTABLE_PartnerLogo UNSTABLE_PartnerLogo--safeArea',
        description: 'should',
      },
    ];

    describe.each(testCases)('when hasSafeArea is $hasSafeArea', ({ hasSafeArea, expectedClassName, description }) => {
      const { result } = renderHook(() => usePartnerLogoStyleProps({ hasSafeArea }));

      it(`${description} return safe area class name`, () => {
        expect(result.current.classProps).toBe(expectedClassName);
      });

      it('should not return hasSafeArea prop', () => {
        expect(result.current.props).toStrictEqual({});
      });
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
