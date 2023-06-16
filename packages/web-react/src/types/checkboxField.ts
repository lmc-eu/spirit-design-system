import {
  ChildrenProps,
  HelperTextProps,
  InputBaseProps,
  ItemProps,
  SpiritInputElementPropsWithRef,
  Validation,
  ValidationTextProps,
} from './shared';
import { LabelProps } from './label';

export type CheckboxElementBaseProps = SpiritInputElementPropsWithRef;

export interface CheckboxFieldProps
  extends CheckboxElementBaseProps,
    ChildrenProps,
    LabelProps,
    ItemProps,
    InputBaseProps,
    Validation,
    ValidationTextProps,
    HelperTextProps {
  /** Whether the checkbox is indeterminate */
  indeterminate?: boolean;
  /** Whether the checkbox is checked */
  isChecked?: boolean;
  /** Text of control label */
  label: string;
}

export interface SpiritCheckboxFieldProps extends CheckboxFieldProps {}
