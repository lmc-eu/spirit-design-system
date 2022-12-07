import React from 'react';
import { ChildrenProps, StyleProps, TransferProps } from './shared';

export type AccordionElementType = 'section' | 'article' | 'div';

export type AccordionOpenStateType = string | string[] | undefined;

export interface AccordionContextProps {
  open: AccordionOpenStateType;
  toggle?: (id: string) => void;
}

export interface AccordionItemContextProps {
  id: string | undefined;
}

export interface AccordionProps
  extends ChildrenProps,
    StyleProps,
    TransferProps,
    Pick<AccordionContextProps, 'toggle'> {
  elementType?: AccordionElementType;
  id?: string;
  open?: AccordionOpenStateType;
}

export interface AccordionItemProps extends ChildrenProps, StyleProps, TransferProps {
  id: string;
  elementType?: AccordionElementType;
}

export interface AccordionHeaderProps extends ChildrenProps, StyleProps, TransferProps {
  slot?: React.ReactNode;
}

export interface AccordionContentProps extends ChildrenProps, StyleProps, TransferProps {}
