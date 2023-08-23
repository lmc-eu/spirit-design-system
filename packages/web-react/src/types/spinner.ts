import { TextColorsDictionaryType } from './shared';
import { IconProps } from './icon';

export interface SpinnerProps extends Omit<IconProps, 'name'> {}

export interface SpiritSpinnerProps<C extends string | undefined = undefined> extends SpinnerProps {
  /** Color of the Spinner */
  color?: TextColorsDictionaryType<C>;
}
