import React from 'react';
import { ButtonLink } from '../../ButtonLink';
import PricingPlan from '../PricingPlan';
import PricingPlanBody from '../PricingPlanBody';
import PricingPlanFooter from '../PricingPlanFooter';
import PricingPlanHeader from '../PricingPlanHeader';

const PricingPlanWithTooltip = () => (
  <PricingPlan>
    <PricingPlanHeader
      action={
        <ButtonLink
          href="#"
          size="large"
          id="plan-tooltip-action"
          aria-labelledby="plan-tooltip-action plan-tooltip-title"
        >
          Get started
        </ButtonLink>
      }
      title={<span id="plan-tooltip-title">Plan 1</span>}
      subtitle="Supporting text or message"
      price="39 EUR"
      note="Another supporting text or message"
    />
    <PricingPlanBody
      id="tier-tooltiop-1"
      features={[
        {
          title: 'Feature name',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          tooltipContent: 'This is a tooltip text',
        },
      ]}
    />
    <PricingPlanFooter>footer</PricingPlanFooter>
  </PricingPlan>
);

export default PricingPlanWithTooltip;
