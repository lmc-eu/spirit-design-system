import { ChildrenProps, StyleProps, TextInputBase, InputBase, Validation, ValueBase, TransferProps } from './shared';
import { LabelProps } from './label';
import { MessageProps } from './message';

interface InputProps extends InputBase, Validation, ValueBase<string | number>, TextInputBase {}

export interface TextFieldBaseProps
  extends ChildrenProps,
    StyleProps,
    LabelProps,
    InputProps,
    MessageProps,
    TransferProps {
  /** Whether the input is disabled. */
  isDisabled?: boolean;
  /** Whether the input is TextArea. */
  isMultiline?: boolean;
  /** The placeholder for input. */
  placeholder?: string;
  /** Whether the input is required. */
  isRequired?: boolean;
}

export interface SpiritTextFieldBaseProps extends TextFieldBaseProps {
  /** Whether the label should be displayed */
  isLabelHidden?: boolean;
  /** Whether the width should be controlled by container */
  isFluid?: boolean;
}
