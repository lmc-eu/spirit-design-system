import { ButtonSize } from './button';
import { ChildrenProps, ComponentButtonColorsDictionaryType, StyleProps, TransferProps } from './shared';

export interface SplitButtonProps extends TransferProps, StyleProps, ChildrenProps {}

export type SplitButtonColorType<C> = Exclude<ComponentButtonColorsDictionaryType<C>, 'plain'>;

export interface SpiritSplitButtonProps<C = void, S = void> extends SplitButtonProps {
  color?: SplitButtonColorType<C>;
  size?: ButtonSize<S>;
}
