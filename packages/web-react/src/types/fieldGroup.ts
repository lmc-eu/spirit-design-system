import { LabelProps } from './label';
import { HelperTextProps, SpiritFieldGroupElementPropsWithRef, Validation, ValidationTextType } from './shared';

export type FieldGroupElementBaseProps = SpiritFieldGroupElementPropsWithRef;

export interface FieldGroupProps extends FieldGroupElementBaseProps, LabelProps, HelperTextProps, Validation {
  isDisabled?: boolean;
  isFluid?: boolean;
  isLabelHidden?: boolean;
  label: string | JSX.Element;
  validationText?: ValidationTextType;
  /** @deprecated The "id" property will be required instead of optional starting from the next major version. */
  id?: string;
}

export interface SpiritFieldGroupProps extends FieldGroupProps {}
