import type { ChangeEventHandler } from 'react';

export type ValidationState = 'success' | 'warning' | 'error';

export interface Validation {
  /** Whether the input should display its "valid" or "invalid" visual styling. */
  validationState?: ValidationState;
  /**
   * Whether user input is required on the input before form submission.
   */
  isRequired?: boolean;
}

export interface InputBase {
  /**
   * The name of the input element, used when submitting an HTML form. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#htmlattrdefname).
   */
  name?: string;
  /** Whether the input is disabled. */
  isDisabled?: boolean;
  /** Handle action when the input is change. */
  onChange?: ChangeEventHandler<HTMLInputElement>;
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
