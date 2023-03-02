import { DetailedHTMLProps, HTMLAttributes, HTMLProps } from 'react';
import { OverloadStyleProps } from './style';

/** Returns all relevant attributes and their types from a given HTML Element */
export type SpiritDetailedHTMLProps<E> = DetailedHTMLProps<HTMLAttributes<E>, E>;
/** Returns all relevant attributes and their types, combined basic and detailed, from a given HTML Element */
export type SpiritCombinedHTMLProps<E> = DetailedHTMLProps<HTMLAttributes<E>, E> & HTMLProps<E>;

export type SpiritDivElementBaseProps = SpiritDetailedHTMLProps<HTMLDivElement>;
export type SpiritDialogElementBaseProps = SpiritDetailedHTMLProps<HTMLDialogElement>;
export type SpiritElementBaseProps = SpiritDetailedHTMLProps<HTMLElement>;
export type SpiritInputElementBaseProps = SpiritCombinedHTMLProps<HTMLInputElement>;
export type SpiritTextAreaElementBaseProps = SpiritCombinedHTMLProps<HTMLTextAreaElement>;

export type SpiritDivElementProps = OverloadStyleProps<SpiritDivElementBaseProps>;
export type SpiritDialogElementProps = OverloadStyleProps<SpiritDialogElementBaseProps>;
export type SpiritElementProps = OverloadStyleProps<SpiritElementBaseProps>;
export type SpiritInputElementProps = Omit<OverloadStyleProps<SpiritInputElementBaseProps>, 'required' | 'type'>;
export type SpiritTextAreaElementProps = Omit<OverloadStyleProps<SpiritTextAreaElementBaseProps>, 'required'>;
