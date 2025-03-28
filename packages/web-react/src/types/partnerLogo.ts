import { ChildrenProps, SizesDictionaryType, StyleProps } from './shared';

export interface SpiritPartnerLogoProps<S = void> extends ChildrenProps, StyleProps {
  hasSafeArea?: boolean;
  isFluid?: boolean;
  size?: SizesDictionaryType<S> | S;
}
