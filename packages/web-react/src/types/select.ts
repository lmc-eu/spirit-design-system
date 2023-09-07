import { HelperTextProps, SpiritSelectElementPropsWithRef, Validation, ValidationTextType } from './shared';
import { LabelProps } from './label';

export type SelectElementBaseProps = SpiritSelectElementPropsWithRef;

export interface SelectProps extends SelectElementBaseProps, LabelProps, HelperTextProps, Validation {
  isDisabled?: boolean;
  isFluid?: boolean;
  isLabelHidden?: boolean;
  validationText?: ValidationTextType;
  /** @deprecated The "id" property will be required instead of optional starting from the next major version. */
  id?: string;
}

export interface SpiritSelectProps extends SelectProps {}
