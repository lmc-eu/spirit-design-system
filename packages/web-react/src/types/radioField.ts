import { ChildrenProps, InputBase, ItemProps, StyleProps, TransferProps, ValueBase } from './shared';
import { LabelProps } from './label';

interface InputProps extends InputBase, ValueBase<string | number> {}

export interface RadioFieldProps extends ChildrenProps, LabelProps, InputProps, ItemProps, StyleProps, TransferProps {
  /** Whether the checkbox is checked */
  isChecked?: boolean;
}

export interface SpiritRadioFieldProps extends RadioFieldProps {}
