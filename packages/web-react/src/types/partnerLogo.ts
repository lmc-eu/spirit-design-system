import { type BreakpointToken, type ChildrenProps, type SizesDictionaryType, type StyleProps } from './shared';

export type SpiritPartnerLogoSizeType<S> =
  | SizesDictionaryType<S>
  | S
  | Partial<Record<BreakpointToken, SizesDictionaryType<S>>>;

export interface SpiritPartnerLogoProps<S = string> extends ChildrenProps, StyleProps {
  hasSafeArea?: boolean;
  isFluid?: boolean;
  size?: SpiritPartnerLogoSizeType<S>;
}
