import {
  HelperTextProps,
  RequiredProps,
  SpiritSelectElementPropsWithRef,
  Validation,
  ValidationTextType,
} from './shared';
import { LabelProps } from './label';

export type SelectElementBaseProps = SpiritSelectElementPropsWithRef;

export interface SelectProps extends SelectElementBaseProps, LabelProps, HelperTextProps, RequiredProps, Validation {
  isDisabled?: boolean;
  isFluid?: boolean;
  isLabelHidden?: boolean;
  validationText?: ValidationTextType;
}

export interface SpiritSelectProps extends SelectProps {}
