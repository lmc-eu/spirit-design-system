import React from 'react';
import { ButtonLink } from '../../ButtonLink';
import PricingPlan from '../PricingPlan';
import PricingPlanBody from '../PricingPlanBody';
import PricingPlanFooter from '../PricingPlanFooter';
import PricingPlanHeader from '../PricingPlanHeader';

const PricingPlanWithModal = () => (
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
      id="tier-1"
      features={[
        {
          title: 'Feature name',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          modalContent: (
            <>
              {[...Array(20)].map((_, index) => {
                const key = `paragraph-${index}`;

                return <p key={key}>This is a really long text that should be wrapped in a paragraph.</p>;
              })}
            </>
          ),
        },
      ]}
    />
    <PricingPlanFooter>footer</PricingPlanFooter>
  </PricingPlan>
);

export default PricingPlanWithModal;
