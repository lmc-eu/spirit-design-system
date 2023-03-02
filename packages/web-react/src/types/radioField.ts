import {
  ChildrenProps,
  HelperTextProps,
  InputBaseProps,
  ItemProps,
  SpiritInputElementProps,
  Validation,
} from './shared';
import { LabelProps } from './label';

export type RadioElementBaseProps = SpiritInputElementProps;

export interface RadioFieldProps
  extends RadioElementBaseProps,
    ChildrenProps,
    LabelProps,
    ItemProps,
    HelperTextProps,
    InputBaseProps,
    Validation {
  /** Whether the checkbox is checked */
  isChecked?: boolean;
  /** Text of control label */
  label: string;
}

export interface SpiritRadioFieldProps extends RadioFieldProps {}
