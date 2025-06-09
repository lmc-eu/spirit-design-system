import { ComponentPropsWithRef, ElementType, JSXElementConstructor } from 'react';
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
  action?: React.Component;
  badge: string | null;
  note: string | null;
  price: string | null;
  subtitle: string | null;
  title: string | null;
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
