import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { OmittedUnsafeStyleProps, StyleProps } from './style';

export type SpiritDetailedHTMLProps<E> = DetailedHTMLProps<HTMLAttributes<E>, E>;

export type SpiritDivElementBaseProps = SpiritDetailedHTMLProps<HTMLDivElement>;
export type SpiritDialogElementBaseProps = SpiritDetailedHTMLProps<HTMLDialogElement>;
export type SpiritElementBaseProps = SpiritDetailedHTMLProps<HTMLElement>;

export type SpiritDivElementProps = OmittedUnsafeStyleProps<SpiritDivElementBaseProps> & StyleProps;
export type SpiritDialogElementProps = OmittedUnsafeStyleProps<SpiritDialogElementBaseProps> & StyleProps;
export type SpiritElementProps = OmittedUnsafeStyleProps<SpiritElementBaseProps> & StyleProps;
