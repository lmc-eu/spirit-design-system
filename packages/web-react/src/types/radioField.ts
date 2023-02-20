import {
  ChildrenProps,
  InputBase,
  ItemProps,
  StyleProps,
  TransferProps,
  ValueBase,
  HelperTextProps,
  Validation,
} from './shared';
import { LabelProps } from './label';

interface InputProps extends InputBase, ValueBase<string | number>, Validation {}

export interface RadioFieldProps
  extends ChildrenProps,
    LabelProps,
    InputProps,
    ItemProps,
    StyleProps,
    HelperTextProps,
    TransferProps {
  /** Whether the checkbox is checked */
  isChecked?: boolean;
}

export interface SpiritRadioFieldProps extends RadioFieldProps {}
