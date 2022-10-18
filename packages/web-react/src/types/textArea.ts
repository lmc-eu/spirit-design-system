import { ChildrenProps, StyleProps, TextInputProps, TransferProps } from './shared';
import { LabelProps } from './label';
import { MessageProps } from './message';

export interface TextAreaProps
  extends ChildrenProps,
    StyleProps,
    LabelProps,
    MessageProps,
    TextInputProps,
    TransferProps {
  /** Maximum characters length */
  maxLength?: number;
  /** The number of visible rows */
  rows?: number;
}

export interface SpiritTextAreaProps extends TextAreaProps {}
