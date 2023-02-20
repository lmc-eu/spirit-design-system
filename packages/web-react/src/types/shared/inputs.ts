import type { ChangeEventHandler, KeyboardEventHandler } from 'react';
import { ValidationStatesTypes } from './dictionaries';

/* @deprecated: 'error' value will be removed in the next major version. */
export type ValidationState = ValidationStatesTypes<'error'>;

export interface Validation {
  /** Whether the input should display its "valid" or "invalid" visual styling. */
  validationState?: ValidationState;
  /**
   * Whether user input is required on the input before form submission.
   */
  isRequired?: boolean;
}

export interface InputBase {
  /** Text of control label */
  label: string;
  /** Identificator of input */
  id: string;
  /**
   * The name of the input element, used when submitting an HTML form. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#htmlattrdefname).
   */
  name?: string;
  /** Whether the label should be displayed */
  isLabelHidden?: boolean;
  /** Whether the input is disabled. */
  isDisabled?: boolean;
  /** Handle action when the input is change. */
  onChange?: ChangeEventHandler<HTMLInputElement>;
  /** Handle action when key is pressed. */
  onKeyDown?: KeyboardEventHandler<HTMLInputElement>;
}

export interface ValueBase<T> {
  /** The current value (controlled). */
  value?: T;
  /** The default value (uncontrolled). */
  defaultValue?: T;
}

export interface TextInputBase {
  /** Temporary text that occupies the text input when it is empty. */
  placeholder?: string;
}

export interface InputProps extends InputBase, Validation, ValueBase<string | number> {}

export interface TextInputProps extends InputProps, TextInputBase {
  /** Whether the width should be controlled by container */
  isFluid?: boolean;
}

export interface HelperTextProps {
  helperText?: string;
}
