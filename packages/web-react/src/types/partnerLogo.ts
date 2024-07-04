import { ChildrenProps, SizesDictionaryType, StyleProps } from './shared';

export interface SpiritPartnerLogoProps<S = void> extends ChildrenProps, StyleProps {
  size?: SizesDictionaryType<S> | S;
  hasSafeAreaDisabled?: boolean;
}
