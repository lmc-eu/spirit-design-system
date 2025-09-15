import { type ChildrenProps, type SingleOrResponsive, type SizesDictionaryType, type StyleProps } from './shared';

export type SpiritPartnerLogoSizeType<S> = SingleOrResponsive<SizesDictionaryType<S> | S>;

export interface SpiritPartnerLogoProps<S = string> extends ChildrenProps, StyleProps {
  hasSafeArea?: boolean;
  isFluid?: boolean;
  size?: SpiritPartnerLogoSizeType<S>;
}
