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

  const { description, features = [], ...restProps } = propsWithDefaults;
  const { classProps, props: modifiedProps } = usePricingPlanStyleProps(restProps);
  const { styleProps, props: otherProps } = useStyleProps(modifiedProps);

  return (
    <div {...otherProps} className={classNames(classProps.body.root, styleProps.className)} style={styleProps.style}>
      {description && <div>{description}</div>}
      <dl className={classProps.body.featureList}>
        {features.map((feature, index) => (
          <div className={classProps.body.featureItem} key={`featureItem-${index + 1}`}>
            <dt className={classProps.body.featureTitle}>
              <Icon name="check-plain" boxSize={16} />
              <div className={classProps.body.featureTitleText}>{feature.title}</div>
            </dt>
            <dd className={classProps.body.featureDescription}>{feature.description}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
};

PricingPlanBody.spiritComponent = 'PricingPlanBody';

export default PricingPlanBody;
