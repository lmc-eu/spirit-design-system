import { ButtonColor, ButtonSize } from './button';
import { ChildrenProps, StyleProps, TransferProps } from './shared';

export interface SplitButtonProps extends TransferProps, StyleProps, ChildrenProps {}

export interface SpiritSplitButtonProps<C = void, S = void> extends SplitButtonProps {
  color?: ButtonColor<C>;
  size?: ButtonSize<S>;
}
