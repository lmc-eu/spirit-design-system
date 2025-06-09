import { ComponentPropsWithRef, ElementType, FunctionComponent, JSXElementConstructor, ReactNode } from 'react';
import { BreakpointToken, ChildrenProps, StyleProps } from './shared';

export interface PricingPlanBaseProps extends ChildrenProps, StyleProps {
  /** If pricing plan is comparable  */
  isComparable?: boolean;
  /** If pricing plan is highlighted */
  isHighlighted?: boolean;
  /** Number of rows in the pricing plan */
  rows?: number | Partial<Record<BreakpointToken, number>>;
}

export interface PricingPlanHeaderBaseProps extends StyleProps {
  action?: ReactNode;
  badge?: string;
  note?: string;
  price?: string;
  subtitle?: string;
  title?: string;
}

export interface PricingPlanBodyBaseProps extends StyleProps {
  description?: string;
  features?: {
    title: string;
    description?: string;
  }[];
}

export type PricingPlanProps<E extends ElementType> = {
  /**
   * The HTML element or React element used to render the plan, e.g. 'div', 'a', or `RouterLink`.
   *
   * @default 'article'
   */
  elementType?: E | JSXElementConstructor<unknown>;
} & PricingPlanBaseProps;

export type SpiritPricingPlanProps<E extends ElementType = 'article'> = PricingPlanProps<E> & ComponentPropsWithRef<E>;
export type SpiritPricingPlanHeaderProps = PricingPlanHeaderBaseProps;
export type SpiritPricingPlanBodyProps = PricingPlanBodyBaseProps;
export type SpiritPricingPlanFooterProps = StyleProps & ChildrenProps;
