import { SpiritPartnerLogoSizeType } from '../types/partnerLogo';
import { BREAKPOINT_MOBILE } from '../types/shared';

export function useSizeClass(classNamePrefix: string, size?: SpiritPartnerLogoSizeType<string>): string | undefined {
  if (!size) return undefined;

  if (typeof size === 'string') {
    return `${classNamePrefix}--${size}`;
  }

  return (
    Object.entries(size)
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      .filter(([_, value]) => !!value)
      .map(([breakpoint, value]) =>
        breakpoint === BREAKPOINT_MOBILE
          ? `${classNamePrefix}--${value}`
          : `${classNamePrefix}--${breakpoint}--${value}`,
      )
      .join(' ')
  );
}
