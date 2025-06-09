'use client';

import classNames from 'classnames';
import React from 'react';
import { useStyleProps } from '../../hooks';
import { SpiritPricingPlanHeaderProps } from '../../types/pricingPlan';
import { usePricingPlanStyleProps } from './usePricingPlanStyleProps';

const defaultProps: Partial<SpiritPricingPlanHeaderProps> = {
  action: undefined,
  badge: null,
  note: null,
  price: null,
  subtitle: null,
  title: null,
};

const PricingPlanHeader = (props: SpiritPricingPlanHeaderProps) => {
  const propsWithDefaults = { ...defaultProps, ...props };
  const { ...restProps } = propsWithDefaults;

  const { classProps, props: modifiedProps } = usePricingPlanStyleProps(restProps);
  const { styleProps, props: otherProps } = useStyleProps(modifiedProps);

  return <header {...otherProps} className={classNames(classProps, styleProps.className)} style={styleProps.style} />;
};

PricingPlanHeader.spiritComponent = 'PricingPlanHeader';

export default PricingPlanHeader;
