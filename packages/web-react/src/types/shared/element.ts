import {
  ComponentPropsWithRef,
  ComponentPropsWithoutRef,
  DetailedHTMLProps,
  ElementType,
  HTMLAttributes,
  HTMLProps,
} from 'react';
import { OverloadStyleProps } from './style';

/** Returns all relevant attributes and their types from a given HTML Element */
export type SpiritDetailedHTMLProps<E> = DetailedHTMLProps<HTMLAttributes<E>, E>;
/** Returns all relevant attributes and their types, combined basic and detailed, from a given HTML Element */
export type SpiritCombinedHTMLProps<E> = DetailedHTMLProps<HTMLAttributes<E>, E> & HTMLProps<E>;
/** Returns the appropriate elementary props based on the element's polymorphic type and excludes any duplicates from it */
export type SpiritPolymorphicElementPropsWithRef<E extends ElementType, P> = Omit<ComponentPropsWithRef<E>, keyof P>;
/** Returns the appropriate elementary props based on the element's polymorphic type and excludes any duplicates from it */
export type SpiritPolymorphicElementPropsWithoutRef<E extends ElementType, P> = Omit<
  ComponentPropsWithoutRef<E>,
  keyof P
>;

export type SpiritElementBaseProps = SpiritDetailedHTMLProps<HTMLElement>;
export type SpiritAnchorElementBaseProps = SpiritCombinedHTMLProps<HTMLButtonElement>;
export type SpiritButtonElementBaseProps = SpiritCombinedHTMLProps<HTMLButtonElement>;
export type SpiritDialogElementBaseProps = SpiritDetailedHTMLProps<HTMLDialogElement>;
export type SpiritDivElementBaseProps = SpiritDetailedHTMLProps<HTMLDivElement>;
export type SpiritInputElementBaseProps = SpiritCombinedHTMLProps<HTMLInputElement>;
export type SpiritLItemElementBaseProps = SpiritDetailedHTMLProps<HTMLLIElement>;
export type SpiritSpanElementBaseProps = SpiritDetailedHTMLProps<HTMLSpanElement>;
export type SpiritTextAreaElementBaseProps = SpiritCombinedHTMLProps<HTMLTextAreaElement>;
export type SpiritUListElementBaseProps = SpiritDetailedHTMLProps<HTMLUListElement>;

export type SpiritElementProps = OverloadStyleProps<SpiritElementBaseProps>;
export type SpiritAnchorElementProps = OverloadStyleProps<SpiritAnchorElementBaseProps>;
export type SpiritButtonElementProps = OverloadStyleProps<SpiritButtonElementBaseProps>;
export type SpiritDialogElementProps = OverloadStyleProps<SpiritDialogElementBaseProps>;
export type SpiritDivElementProps = OverloadStyleProps<SpiritDivElementBaseProps>;
export type SpiritInputElementProps = Omit<OverloadStyleProps<SpiritInputElementBaseProps>, 'required' | 'type'>;
export type SpiritLItemElementProps = OverloadStyleProps<SpiritLItemElementBaseProps>;
export type SpiritSpanElementProps = OverloadStyleProps<SpiritSpanElementBaseProps>;
export type SpiritTextAreaElementProps = Omit<OverloadStyleProps<SpiritTextAreaElementBaseProps>, 'required'>;
export type SpiritUListElementProps = OverloadStyleProps<SpiritUListElementBaseProps>;

export type SpiritInputElementPropsWithRef = SpiritInputElementProps & ComponentPropsWithRef<'input'>;
export type SpiritTextAreaElementPropsWithRef = SpiritTextAreaElementProps & ComponentPropsWithRef<'textarea'>;
