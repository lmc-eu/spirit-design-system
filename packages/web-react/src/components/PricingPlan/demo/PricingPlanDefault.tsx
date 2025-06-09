import React from 'react';
import { ButtonLink } from '../../ButtonLink';
import PricingPlan from '../PricingPlan';
import PricingPlanHeader from '../PricingPlanHeader';

const PricingPlanDefault = () => (
  <PricingPlan>
    <PricingPlanHeader
      action={<ButtonLink href="#">Get started</ButtonLink>}
      badge="Recommended"
      title="Plan 1"
      subtitle="Supporting text or message"
      price="39 EUR"
      note="Another supporting text or message"
    />
  </PricingPlan>
);

export default PricingPlanDefault;
