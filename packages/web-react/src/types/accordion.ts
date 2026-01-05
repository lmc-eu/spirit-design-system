import { type ElementType, type ReactNode } from 'react';
import {
  type ChildrenProps,
  type ElementTypeProps,
  type SpiritPolymorphicElementPropsWithoutRef,
  type StyleProps,
  type TransferProps,
} from './shared';

export type AccordionOpenStateType = string | string[] | undefined;

export interface AccordionHandlingProps {
  open: AccordionOpenStateType;
  toggle: (id: string) => void;
}

export interface AccordionItemContextProps {
  id: string;
}

export interface BaseAccordionProps extends ChildrenProps, StyleProps, TransferProps {}

export interface AccordionElementTypeProps<E extends ElementType = 'section'> {
  /**
   * The HTML element or React element used to render the accordion, e.g. 'section'.
   *
   * @default 'section'
   */
  elementType?: E;
}

export interface AccordionBaseProps extends BaseAccordionProps, AccordionHandlingProps {}

export type AccordionProps<E extends ElementType> = AccordionElementTypeProps<E> & AccordionBaseProps;

export type SpiritAccordionProps<E extends ElementType = 'section'> = AccordionProps<E> &
  SpiritPolymorphicElementPropsWithoutRef<E, AccordionProps<E>>;

export interface AccordionHeaderProps<T extends ElementType = 'h3'> extends BaseAccordionProps, ElementTypeProps<T> {
  slot?: ReactNode;
}

export interface AccordionItemBaseProps extends BaseAccordionProps, AccordionItemContextProps {}

export type AccordionItemProps<E extends ElementType> = {
  /**
   * The HTML element or React element used to render the accordion item, e.g. 'article'.
   *
   * @default 'article'
   */
  elementType?: E;
} & AccordionItemBaseProps;

export type SpiritAccordionItemProps<E extends ElementType = 'article'> = AccordionItemProps<E> &
  SpiritPolymorphicElementPropsWithoutRef<E, AccordionItemProps<E>>;

export interface AccordionContentProps extends BaseAccordionProps {}

export interface UncontrolledAccordionBaseProps extends BaseAccordionProps {
  defaultOpen?: AccordionOpenStateType;
  stayOpen?: boolean;
}

export type UncontrolledAccordionProps<E extends ElementType> = AccordionElementTypeProps<E> &
  UncontrolledAccordionBaseProps;

export type SpiritUncontrolledAccordionProps<E extends ElementType = 'section'> = UncontrolledAccordionProps<E> &
  SpiritPolymorphicElementPropsWithoutRef<E, UncontrolledAccordionProps<E>>;
