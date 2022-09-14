import { ChildrenProps, StyleProps, Validation, InputBase, ValueBase, RestProps } from './shared';
import { LabelProps } from './label';

interface InputProps extends InputBase, Validation, ValueBase<string | number> {}

export interface RadioFieldProps extends ChildrenProps, StyleProps, LabelProps, InputProps, RestProps {
  /** Text of control label */
  label: string;
  /** Identificator of input */
  id?: string;
  /** Whether the checkbox is checked */
  isChecked?: boolean;
}

export interface SpiritRadioFieldProps extends RadioFieldProps {
  /** Whether the label should be displayed */
  isLabelHidden?: boolean;
}
