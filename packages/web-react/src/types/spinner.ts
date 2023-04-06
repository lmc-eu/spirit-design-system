import { StyleProps, TextColorsDictionaryType, TransferProps } from './shared';

export interface SpinnerProps extends StyleProps, TransferProps {}

export interface SpiritSpinnerProps<C = void> extends SpinnerProps {
  /** Color of the Spinner */
  color?: TextColorsDictionaryType<C>;
}
