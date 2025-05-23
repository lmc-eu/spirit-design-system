import { AriaRole, ReactNode } from 'react';
import { ValidationStatesDictionaryType } from './dictionaries';

export type ValidationState = ValidationStatesDictionaryType;

export type ValidationTextType = ReactNode | ReactNode[];

export interface Validation {
  /** Whether the input should display its "valid" or "invalid" visual styling. */
  validationState?: ValidationState;
  /**
   * Whether user input is required on the input before form submission.
   */
  isRequired?: boolean;
  /** Whether the validation state icon should be displayed. */
  hasValidationIcon?: boolean;
}

export interface TextInputBase {
  /** Temporary text that occupies the text input when it is empty. */
  placeholder?: string;
  /** The input width */
  inputWidth?: number;
}

export type InputBaseProps = {
  /** Whether the label should be displayed */
  isLabelHidden?: boolean;
  /** Whether the input is disabled. */
  isDisabled?: boolean;
};

export interface TextInputProps extends TextInputBase {
  /** Whether the width should be controlled by container */
  isFluid?: boolean;
}

export interface HelperTextProps {
  /** If I wanted some help text */
  helperText?: ReactNode;
}

export interface ValidationTextProp {
  /** The role for validation text element */
  role?: AriaRole;
  /** The validation text to display. */
  validationText?: ValidationTextType;
  /** Whether the validation state icon should be displayed, and specify which type. */
  hasValidationStateIcon?: ValidationState;
}

export interface RequiredProps {
  id: string;
}
