import { ChildrenProps, SizesDictionaryType, StyleProps } from './shared';

export interface SpiritPartnerLogoProps<S = void> extends ChildrenProps, StyleProps {
  hasSafeArea?: boolean;
  size?: SizesDictionaryType<S> | S;
}
