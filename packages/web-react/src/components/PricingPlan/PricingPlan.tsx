'use client';

import classNames from 'classnames';
import { root } from 'postcss';
import React, { ElementType } from 'react';
import { useStyleProps } from '../../hooks';
import { SpiritPricingPlanProps } from '../../types/pricingPlan';
import { mergeStyleProps } from '../../utils';
import { usePricingPlanStyleProps } from './usePricingPlanStyleProps';

const defaultProps: Partial<SpiritPricingPlanProps> = {
  isComparable: false,
  isHighlighted: false,
  rows: 100,
};

const PricingPlan = <T extends ElementType = 'article'>(props: SpiritPricingPlanProps<T>) => {
  const propsWithDefaults = { ...defaultProps, ...props };
  const { elementType: ElementTag = 'article', children, ...restProps } = propsWithDefaults;

  const { classProps, props: modifiedProps } = usePricingPlanStyleProps(restProps);
  const { styleProps, props: otherProps } = useStyleProps(modifiedProps);
  const mergedStyleProps = mergeStyleProps(ElementTag, { classProps: classProps.root, styleProps });

  return (
    <ElementTag {...otherProps} {...mergedStyleProps}>
      <div className={classNames(classProps.layout)}>{children}</div>
    </ElementTag>
  );
};

PricingPlan.spiritComponent = 'PricingPlan';

export default PricingPlan;
