import { ReactNode } from 'react';
import { LabelProps } from './label';
import {
  HelperTextProps,
  RequiredProps,
  SpiritSelectElementPropsWithRef,
  Validation,
  ValidationTextType,
} from './shared';

export type SelectElementBaseProps = SpiritSelectElementPropsWithRef;

export interface SelectProps extends SelectElementBaseProps, LabelProps, HelperTextProps, RequiredProps, Validation {
  isDisabled?: boolean;
  isFluid?: boolean;
  isLabelHidden?: boolean;
  label: ReactNode;
  validationText?: ValidationTextType;
}

export interface SpiritSelectProps extends SelectProps {}
