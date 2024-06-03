import { LabelProps } from './label';
import {
  ChildrenProps,
  HelperTextProps,
  InputBaseProps,
  ItemProps,
  RequiredProps,
  SpiritInputElementPropsWithRef,
  Validation,
  ValidationTextProp,
} from './shared';

export type CheckboxElementBaseProps = SpiritInputElementPropsWithRef;

export interface CheckboxProps
  extends CheckboxElementBaseProps,
    ChildrenProps,
    LabelProps,
    ItemProps,
    InputBaseProps,
    Validation,
    ValidationTextProp,
    RequiredProps,
    HelperTextProps {
  /** Whether the checkbox is indeterminate */
  indeterminate?: boolean;
  /** Whether the checkbox is checked */
  isChecked?: boolean;
  /** Text of control label */
  label: string;
}

export interface SpiritCheckboxProps extends CheckboxProps {}
