import classNames from 'classnames';
import { useClassNamePrefix } from '../../hooks';
import { SpiritPricingPlanProps } from '../../types/pricingPlan';

export interface PricingPlanStyles<T> {
  classProps: {
    root: string;
    layout: string;
    header: string;
  };
  props: T;
}

export const usePricingPlanStyleProps = (props: SpiritPricingPlanProps): PricingPlanStyles<SpiritPricingPlanProps> => {
  const { isComparable, ...restProps } = props;

  const pricingPlanClass = useClassNamePrefix('PricingPlan');
  const pricingPlanComparableClass = `${pricingPlanClass}--comparable`;
  const pricingPlanLayoutClass = `${pricingPlanClass}__layout`;

  const pricingPlanHeaderClass = useClassNamePrefix('PricingPlanHeader');

  const rootClassProps = classNames(pricingPlanClass, {
    [pricingPlanComparableClass]: isComparable,
  });

  return {
    classProps: {
      root: rootClassProps,
      layout: pricingPlanLayoutClass,
      header: pricingPlanHeaderClass,
    },
    props: restProps,
  };
};
