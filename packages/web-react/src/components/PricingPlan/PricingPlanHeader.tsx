'use client';

import classNames from 'classnames';
import React from 'react';
import { useStyleProps } from '../../hooks';
import { SpiritPricingPlanHeaderProps } from '../../types/pricingPlan';
import { usePricingPlanStyleProps } from './usePricingPlanStyleProps';

const defaultProps: Partial<SpiritPricingPlanHeaderProps> = {
  action: undefined,
  badge: undefined,
  note: undefined,
  price: undefined,
  subtitle: undefined,
  title: undefined,
};

const PricingPlanHeader = (props: SpiritPricingPlanHeaderProps) => {
  const propsWithDefaults = { ...defaultProps, ...props };

  const { classProps, props: modifiedProps } = usePricingPlanStyleProps(propsWithDefaults);
  const { badge, title, subtitle, price, action, note } = propsWithDefaults;
  const { styleProps, props: otherProps } = useStyleProps(modifiedProps);

  return (
    <header
      {...otherProps}
      className={classNames(classProps.header.root, styleProps.className)}
      style={styleProps.style}
    >
      {badge && <div className={classProps.header.badge}>{badge}</div>}
      <div className={classProps.header.content}>
        {title && <h3 className={classProps.header.title}>{title}</h3>}
        {subtitle && <div className={classNames(classProps.header.subtitle)}>{subtitle}</div>}
        {price && <div className={classProps.header.price}>{price}</div>}
        {action && <div className={classProps.header.action}>{action}</div>}
        {note && <div className={classProps.header.note}>{note}</div>}
      </div>
    </header>
  );
};

PricingPlanHeader.spiritComponent = 'PricingPlanHeader';

export default PricingPlanHeader;
