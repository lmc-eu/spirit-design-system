import { ChildrenProps, StyleProps } from './shared';

type ValidationState = 'error';

export interface MessageProps {
  /** The validation or other message to display. */
  message?: string;
}

export interface LabelProps {
  /** Label of the input. */
  label?: string;
}

export interface InputProps {
  /** The id of input and htmlFor of label. */
  id?: string;
  /** The placeholder for input. */
  placeholder?: string;
  /** Whether the input is disabled. */
  disabled?: boolean;
  /** Whether the input is required. */
  required?: boolean;
  /** Value of the input. */
  value?: string | number;
}

export interface TextFieldProps extends ChildrenProps, StyleProps, LabelProps, InputProps, MessageProps {}

export interface SpiritTextFieldProps extends TextFieldProps {
  /** Whether the field has validation error. */
  validationState?: ValidationState;
  /** Whether the label should be displayed */
  isLabelHidden?: boolean;
}
