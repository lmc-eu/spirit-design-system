'use client';

import classNames from 'classnames';
import React from 'react';
import { useStyleProps } from '../../hooks';
import { SpiritPricingPlanBodyProps } from '../../types/pricingPlan';
import { Icon } from '../Icon';
import { usePricingPlanStyleProps } from './usePricingPlanStyleProps';

const defaultProps: Partial<SpiritPricingPlanBodyProps> = {
  description: undefined,
  features: [],
};

const PricingPlanBody = (props: SpiritPricingPlanBodyProps) => {
  const propsWithDefaults = { ...defaultProps, ...props };
  const { features = [] } = propsWithDefaults;

  const { classProps, props: modifiedProps } = usePricingPlanStyleProps(propsWithDefaults);
  const { styleProps, props: otherProps } = useStyleProps(modifiedProps);

  return (
    <div {...otherProps} className={classNames(classProps.body.root, styleProps.className)} style={styleProps.style}>
      <div>{propsWithDefaults.description}</div>
      <dl className={classNames(classProps.body.featureList)}>
        {features.map((feature, index) => (
          <div className={classNames(classProps.body.featureItem)} key={`feature-${index + 1}`}>
            <dt className={classNames(classProps.body.featureTitle)}>
              <Icon name="check-plain" boxSize={16} />
              <div className={classNames(classProps.body.featureTitleText)}>{feature.title}</div>
            </dt>
            <dd className={classNames(classProps.body.featureDescription)}>{feature.description}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
};

PricingPlanBody.spiritComponent = 'PricingPlanBody';

export default PricingPlanBody;
