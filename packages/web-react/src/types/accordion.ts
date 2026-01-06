import { type ElementType, type ReactNode } from 'react';
import {
  type ChildrenProps,
  type ElementTypeProps,
  type SpiritPolymorphicElementPropsWithRef,
  type StyleProps,
} from './shared';

export type AccordionOpenStateType = string | string[] | undefined;

export interface AccordionHandlingProps {
  open: AccordionOpenStateType;
  toggle: (id: string) => void;
}

export interface AccordionItemContextProps {
  id: string;
}

export interface BaseAccordionProps extends ChildrenProps, StyleProps {}

export interface AccordionBaseProps extends BaseAccordionProps, AccordionHandlingProps {}

export type AccordionProps<T extends ElementType> = ElementTypeProps<T> & AccordionBaseProps;

export type SpiritAccordionProps<T extends ElementType = 'section'> = AccordionProps<T> &
  SpiritPolymorphicElementPropsWithRef<T, AccordionProps<T>>;

export type AccordionHeaderProps<T extends ElementType = 'h3'> = ElementTypeProps<T> & {
  slot?: ReactNode;
} & BaseAccordionProps;

export type SpiritAccordionHeaderProps<T extends ElementType = 'h3'> = AccordionHeaderProps<T> &
  SpiritPolymorphicElementPropsWithRef<T, AccordionHeaderProps<T>>;

export interface AccordionItemBaseProps extends BaseAccordionProps, AccordionItemContextProps {}

export type AccordionItemProps<T extends ElementType> = ElementTypeProps<T> & AccordionItemBaseProps;

export type SpiritAccordionItemProps<T extends ElementType = 'article'> = AccordionItemProps<T> &
  SpiritPolymorphicElementPropsWithRef<T, AccordionItemProps<T>>;

export interface AccordionContentProps extends BaseAccordionProps {}

export interface UncontrolledAccordionBaseProps extends BaseAccordionProps {
  defaultOpen?: AccordionOpenStateType;
  stayOpen?: boolean;
}

export type UncontrolledAccordionProps<T extends ElementType> = ElementTypeProps<T> & UncontrolledAccordionBaseProps;

export type SpiritUncontrolledAccordionProps<T extends ElementType = 'section'> = UncontrolledAccordionProps<T> &
  SpiritPolymorphicElementPropsWithRef<T, UncontrolledAccordionProps<T>>;
