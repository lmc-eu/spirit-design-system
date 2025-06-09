'use client';

import classNames from 'classnames';
import React from 'react';
import { useStyleProps } from '../../hooks';
import { SpiritPricingPlanFooterProps } from '../../types/pricingPlan';
import { usePricingPlanStyleProps } from './usePricingPlanStyleProps';

const PricingPlanFooter = (props: SpiritPricingPlanFooterProps) => {
  const { children, ...restProps } = props;

  const { classProps, props: modifiedProps } = usePricingPlanStyleProps(restProps);
  const { styleProps, props: otherProps } = useStyleProps(modifiedProps);

  return (
    <footer {...otherProps} className={classNames(classProps.footer, styleProps.className)} style={styleProps.style}>
      {children}
    </footer>
  );
};

PricingPlanFooter.spiritComponent = 'PricingPlanFooter';

export default PricingPlanFooter;
