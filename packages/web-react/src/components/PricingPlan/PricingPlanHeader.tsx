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

  const { styleProps, props: otherProps } = useStyleProps(modifiedProps);

  return (
    <header
      {...otherProps}
      className={classNames(classProps.header.root, styleProps.className)}
      style={styleProps.style}
    >
      {propsWithDefaults.badge && <div className={classNames(classProps.header.badge)}>{propsWithDefaults.badge}</div>}
      <div className={classNames(classProps.header.content)}>
        {propsWithDefaults.title && <h3 className={classNames(classProps.header.title)}>{propsWithDefaults.title}</h3>}
        {propsWithDefaults.subtitle && (
          <div className={classNames(classProps.header.subtitle)}>{propsWithDefaults.subtitle}</div>
        )}
        {propsWithDefaults.price && (
          <div className={classNames(classProps.header.price)}>{propsWithDefaults.price}</div>
        )}
        {propsWithDefaults.action && (
          <div className={classNames(classProps.header.action)}>{propsWithDefaults.action}</div>
        )}
        {propsWithDefaults.note && <div className={classNames(classProps.header.note)}>{propsWithDefaults.note}</div>}
      </div>
    </header>
  );
};

PricingPlanHeader.spiritComponent = 'PricingPlanHeader';

export default PricingPlanHeader;
