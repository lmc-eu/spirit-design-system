import { type ElementType, type ReactNode } from 'react';
import { type ChildrenProps, type ElementTypeProps, type StyleProps, type TransferProps } from './shared';

export type AccordionOpenStateType = string | string[] | undefined;

export interface AccordionHandlingProps {
  open: AccordionOpenStateType;
  toggle: (id: string) => void;
}

export interface AccordionItemContextProps {
  id: string;
}

export interface BaseAccordionProps extends ChildrenProps, StyleProps, TransferProps {}

export interface AccordionProps<T extends ElementType = 'section'>
  extends BaseAccordionProps,
    AccordionHandlingProps,
    ElementTypeProps<T> {}

export interface AccordionHeaderProps<T extends ElementType = 'h3'> extends BaseAccordionProps, ElementTypeProps<T> {
  slot?: ReactNode;
}

export interface AccordionItemProps<T extends ElementType = 'article'>
  extends BaseAccordionProps,
    AccordionItemContextProps,
    ElementTypeProps<T> {}

export interface AccordionContentProps extends BaseAccordionProps {}

export interface UncontrolledAccordionProps extends BaseAccordionProps {
  defaultOpen?: AccordionOpenStateType;
  stayOpen?: boolean;
}
