import { ChildrenProps, StyleProps, InputBase, ValueBase, TransferProps } from './shared';
import { LabelProps } from './label';

interface InputProps extends InputBase, ValueBase<string | number> {}

export interface RadioFieldProps extends ChildrenProps, StyleProps, LabelProps, InputProps, TransferProps {
  /** Whether the checkbox is checked */
  isChecked?: boolean;
}

export interface SpiritRadioFieldProps extends RadioFieldProps {}
