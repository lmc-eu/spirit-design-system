'use client';

import classNames from 'classnames';
import React, { ElementType } from 'react';
import { useStyleProps } from '../../hooks';
import { SpiritPricingPlanProps } from '../../types/pricingPlan';
import { mergeStyleProps } from '../../utils';
import { NUMBER_OF_PLAN_ROWS_DEFAULT } from './constants';
import { usePricingPlanStyleProps } from './usePricingPlanStyleProps';

const defaultProps: Partial<SpiritPricingPlanProps> = {
  hasComparableFeatures: false,
  rows: NUMBER_OF_PLAN_ROWS_DEFAULT,
};

const PricingPlan = <T extends ElementType = 'article'>(props: SpiritPricingPlanProps<T>) => {
  const propsWithDefaults = { ...defaultProps, ...props };
  const { elementType: ElementTag = 'article', children, ...restProps } = propsWithDefaults;

  const { classProps, props: modifiedProps, styleProps: pricingPlanStyleProps } = usePricingPlanStyleProps(restProps);
  const { styleProps, props: otherProps } = useStyleProps(modifiedProps);
  const mergedStyleProps = mergeStyleProps(ElementTag, {
    classProps: classProps.root,
    pricingPlanStyleProps,
    styleProps,
  });

  return (
    <ElementTag {...otherProps} {...mergedStyleProps}>
      <div className={classNames(classProps.layout)}>{children}</div>
    </ElementTag>
  );
};

PricingPlan.spiritComponent = 'PricingPlan';

export default PricingPlan;
