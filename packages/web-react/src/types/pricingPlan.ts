import { ComponentPropsWithRef, ElementType, JSXElementConstructor, ReactNode } from 'react';
import { AccentColorToken, ChildrenProps, StyleProps } from './shared';

export interface PricingPlanBaseProps extends ChildrenProps, StyleProps {
  /** If pricing plan has comparable features  */
  hasComparableFeatures?: boolean;
  /** If pricing plan is highlighted */
  highlightedColor?: AccentColorToken;
  /** Number of grid rows in the plan layout */
  rows?: number;
}

export interface PricingPlanHeaderBaseProps extends StyleProps {
  /** Action element, e.g. a button or link */
  action?: ReactNode;
  /** Badge text or element */
  badge?: string;
  /** Note or additional information */
  note?: string;
  /** Price of the plan */
  price?: string;
  /** Subtitle of the plan */
  subtitle?: string;
  /** Title of the plan */
  title?: string;
}

export interface PricingPlanBodyBaseProps extends StyleProps {
  /** Description of the plan body */
  description?: string;
  /** Features of the plan body */
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
