import { ChildrenProps, StyleProps, TextInputProps, TransferProps, HelperTextProps } from './shared';
import { LabelProps } from './label';
import { MessageProps } from './message';

export interface TextAreaProps
  extends ChildrenProps,
    StyleProps,
    LabelProps,
    MessageProps,
    HelperTextProps,
    TextInputProps,
    TransferProps {
  /** Maximum characters length */
  maxLength?: number;
  /** The number of visible rows */
  rows?: number;
}

export interface SpiritTextAreaProps extends TextAreaProps {}
