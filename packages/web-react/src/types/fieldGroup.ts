import { LabelProps } from './label';
import {
  HelperTextProps,
  RequiredProps,
  SpiritFieldGroupElementPropsWithRef,
  Validation,
  ValidationTextType,
} from './shared';

export type FieldGroupElementBaseProps = SpiritFieldGroupElementPropsWithRef;

export interface FieldGroupProps
  extends FieldGroupElementBaseProps,
    LabelProps,
    HelperTextProps,
    RequiredProps,
    Validation {
  isDisabled?: boolean;
  isFluid?: boolean;
  isLabelHidden?: boolean;
  label: string | JSX.Element;
  validationText?: ValidationTextType;
}

export interface SpiritFieldGroupProps extends FieldGroupProps {}
