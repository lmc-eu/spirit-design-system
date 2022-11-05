import { ChildrenProps, StyleProps, TextInputProps, TransferProps } from './shared';
import { LabelProps } from './label';
import { MessageProps } from './message';

export interface TextFieldBaseProps
  extends ChildrenProps,
    StyleProps,
    LabelProps,
    TextInputProps,
    MessageProps,
    TransferProps {
  /** Whether the width should be controlled by container */
  isFluid?: boolean;
  /** Whether the input is TextArea. */
  isMultiline?: boolean;
}

export interface SpiritTextFieldBaseProps extends TextFieldBaseProps {}
