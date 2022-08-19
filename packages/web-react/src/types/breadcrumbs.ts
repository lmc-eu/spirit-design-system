import { ElementType, JSXElementConstructor } from 'react';
import { ChildrenProps, StyleProps } from './shared';

export type BreadcrumbsItem = {
  title: string;
  url: string;
};

export interface AriaBreadcrumbsElementTypeProps<T extends ElementType = 'nav'> {
  /**
   * The HTML element or React element used to render the alert, e.g. 'div', 'span'.
   *
   * @default 'nav'
   */
  elementType?: T | JSXElementConstructor<unknown>;
}

export interface BreadcrumbsProps extends StyleProps {}

export interface SpiritBreadcrumbsProps<T extends ElementType = 'nav'>
  extends AriaBreadcrumbsElementTypeProps<T>,
    StyleProps,
    ChildrenProps {
  goBackTitle: string;
  items?: BreadcrumbsItem[];
}
