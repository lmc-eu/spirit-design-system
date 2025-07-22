'use client';

import classNames from 'classnames';
import React from 'react';
import { useToggle } from '../../hooks';
import type { PricingPlanFeature } from '../../types/pricingPlan';
import { Icon } from '../Icon';
import { Tooltip, TooltipPopover, TooltipTrigger } from '../Tooltip';
import { usePricingPlanStyleProps } from './usePricingPlanStyleProps';

const PricingPlanFeatureTitle = ({
  feature,
  featureId,
  ...restProps
}: {
  feature: PricingPlanFeature;
  featureId: string;
}) => {
  const { title, tooltipContent } = feature;
  const { classProps } = usePricingPlanStyleProps(restProps);
  const [isTooltipOpen, toggleTooltip] = useToggle(false);
  const titleId = `${featureId}-title`;

  return tooltipContent ? (
    <Tooltip
      elementType="dt"
      id={titleId}
      isDismissible
      isOpen={isTooltipOpen}
      onToggle={toggleTooltip}
      placement="top"
      trigger={['click']}
      UNSAFE_className={classProps.body.featureTitle}
    >
      <Icon name="check-plain" boxSize={16} />
      <TooltipTrigger
        elementType="div"
        UNSAFE_className={classNames(classProps.body.featureTitleText, 'text-underlined-dotted')}
      >
        {title}
      </TooltipTrigger>
      <TooltipPopover>
        <div>{tooltipContent}</div>
      </TooltipPopover>
    </Tooltip>
  ) : (
    <dt className={classProps.body.featureTitle}>
      <Icon name="check-plain" boxSize={16} />
      <div className={classProps.body.featureTitleText} id={titleId}>
        {title}
      </div>
    </dt>
  );
};

PricingPlanFeatureTitle.spiritComponent = 'PricingPlanFeatureTitle';

export default PricingPlanFeatureTitle;
