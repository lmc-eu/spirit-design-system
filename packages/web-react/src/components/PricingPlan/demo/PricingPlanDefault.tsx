import React from 'react';
import { ButtonLink } from '../../ButtonLink';
import PricingPlan from '../PricingPlan';
import PricingPlanBody from '../PricingPlanBody';
import PricingPlanFooter from '../PricingPlanFooter';
import PricingPlanHeader from '../PricingPlanHeader';

const PricingPlanDefault = () => (
  <PricingPlan>
    <PricingPlanHeader
      action={
        <ButtonLink href="#" size="large">
          Get started
        </ButtonLink>
      }
      title="Plan 1"
      subtitle="Supporting text or message"
      price="39 EUR"
      note="Another supporting text or message"
    />
    <PricingPlanBody
      id="pricing-plan-body-default"
      features={[
        {
          title: 'Feature name',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        },
      ]}
    />
    <PricingPlanFooter>footer</PricingPlanFooter>
  </PricingPlan>
);

export default PricingPlanDefault;
