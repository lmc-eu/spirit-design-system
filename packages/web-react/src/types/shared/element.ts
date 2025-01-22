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
/**
 * Type React's forwarded ref with `PolymorphicRef` to allow generic `elementType` to be strongly typed, e.g. component allows switching of elements
 *
 * @see https://www.freecodecamp.org/news/build-strongly-typed-polymorphic-components-with-react-and-typescript/
 */
export type PolymorphicRef<C extends React.ElementType> = React.ComponentPropsWithRef<C>['ref'];

export type SpiritElementBaseProps = SpiritDetailedHTMLProps<HTMLElement>;
export type SpiritAnchorElementBaseProps = SpiritCombinedHTMLProps<HTMLButtonElement>;
export type SpiritButtonElementBaseProps = SpiritCombinedHTMLProps<HTMLButtonElement>;
export type SpiritDialogElementBaseProps = SpiritDetailedHTMLProps<HTMLDialogElement>;
export type SpiritDivElementBaseProps = SpiritDetailedHTMLProps<HTMLDivElement>;
export type SpiritInputElementBaseProps = SpiritCombinedHTMLProps<HTMLInputElement>;
export type SpiritLItemElementBaseProps = SpiritDetailedHTMLProps<HTMLLIElement>;
export type SpiritSelectElementBaseProps = SpiritCombinedHTMLProps<HTMLSelectElement>;
export type SpiritSpanElementBaseProps = SpiritDetailedHTMLProps<HTMLSpanElement>;
export type SpiritTextAreaElementBaseProps = SpiritCombinedHTMLProps<HTMLTextAreaElement>;
export type SpiritUListElementBaseProps = SpiritDetailedHTMLProps<HTMLUListElement>;
export type SpiritFieldGroupElementBaseProps = SpiritDetailedHTMLProps<HTMLFieldSetElement>;

export type SpiritElementProps = OverloadStyleProps<SpiritElementBaseProps>;
export type SpiritAnchorElementProps = OverloadStyleProps<SpiritAnchorElementBaseProps>;
export type SpiritButtonElementProps = OverloadStyleProps<SpiritButtonElementBaseProps>;
export type SpiritDialogElementProps = OverloadStyleProps<SpiritDialogElementBaseProps>;
export type SpiritDivElementProps = OverloadStyleProps<SpiritDivElementBaseProps>;
export type SpiritInputElementProps = Omit<
  OverloadStyleProps<SpiritInputElementBaseProps>,
  'required' | 'disabled' | 'type'
>;
export type SpiritLItemElementProps = OverloadStyleProps<SpiritLItemElementBaseProps>;
export type SpiritSelectElementProps = Omit<OverloadStyleProps<SpiritSelectElementBaseProps>, 'required' | 'disabled'>;
export type SpiritSpanElementProps = OverloadStyleProps<SpiritSpanElementBaseProps>;
export type SpiritTextAreaElementProps = Omit<
  OverloadStyleProps<SpiritTextAreaElementBaseProps>,
  'required' | 'disabled'
>;
export type SpiritUListElementProps = OverloadStyleProps<SpiritUListElementBaseProps>;
export type SpiritFieldGroupElementProps = OverloadStyleProps<SpiritFieldGroupElementBaseProps>;

export type SpiritInputElementPropsWithRef = Omit<
  SpiritInputElementProps & ComponentPropsWithRef<'input'>,
  'id' | 'label'
>;
export type SpiritSelectElementPropsWithRef = Omit<
  SpiritSelectElementProps & ComponentPropsWithRef<'select'>,
  'id' | 'label'
>;
export type SpiritTextAreaElementPropsWithRef = Omit<
  SpiritTextAreaElementProps & ComponentPropsWithRef<'textarea'>,
  'id' | 'label'
>;
export type SpiritFieldGroupElementPropsWithRef = Omit<
  SpiritFieldGroupElementProps & ComponentPropsWithRef<'fieldset'>,
  'id'
>;
