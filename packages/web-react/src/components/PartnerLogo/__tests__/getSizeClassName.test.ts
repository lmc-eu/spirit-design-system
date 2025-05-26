import { BREAKPOINT_MOBILE } from '../../../types';
import { getSizeClassName } from '../getSizeClassName';

const CLASS_NAME_PREFIX = 'PartnerLogo';

describe('getSizeClassName', () => {
  it('returns undefined if size is not provided', () => {
    expect(getSizeClassName(CLASS_NAME_PREFIX, undefined)).toBeUndefined();
  });

  it('returns correct class for string size', () => {
    expect(getSizeClassName(CLASS_NAME_PREFIX, 'large')).toBe('PartnerLogo--large');
  });

  it('returns correct classes for object with breakpoints', () => {
    const size = { mobile: 'small', tablet: 'medium', desktop: 'large' };
    expect(getSizeClassName(CLASS_NAME_PREFIX, size)).toBe(
      'PartnerLogo--small PartnerLogo--tablet--medium PartnerLogo--desktop--large',
    );
  });

  it('ignores empty or undefined values in object', () => {
    const size = { mobile: '', tablet: 'medium', desktop: undefined };
    expect(getSizeClassName(CLASS_NAME_PREFIX, size)).toBe('PartnerLogo--tablet--medium');
  });

  it('uses BREAKPOINT_MOBILE constant for mobile key', () => {
    const size = { [BREAKPOINT_MOBILE]: 'small', desktop: 'large' };
    expect(getSizeClassName(CLASS_NAME_PREFIX, size)).toBe('PartnerLogo--small PartnerLogo--desktop--large');
  });
});
