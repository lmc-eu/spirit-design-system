import React from 'react';
import { ButtonLink } from '../../ButtonLink';
import { Matrix } from '../../Matrix';
import { ScrollView } from '../../ScrollView';
import PricingPlan from '../PricingPlan';
import PricingPlanBody from '../PricingPlanBody';
import PricingPlanFooter from '../PricingPlanFooter';
import PricingPlanHeader from '../PricingPlanHeader';

const PricingPlanInMatrix = () => (
  <div className="breakout-container d-grid">
    <ScrollView direction="horizontal">
      <Matrix
        spacingX={{ mobile: 'space-600', tablet: 'space-700' }}
        marginBottom="space-800"
        UNSAFE_style={{ marginInline: 'var(--container-padding-inline)' }}
      >
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
          />
          <PricingPlanBody
            id="tier-0"
            features={[
              {
                title: 'Feature name',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              },
              {
                title: 'Feature name',
                description:
                  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris.',
              },
              {
                title: 'Feature name',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              },
            ]}
          />
          <PricingPlanFooter>footer</PricingPlanFooter>
        </PricingPlan>
        <PricingPlan>
          <PricingPlanHeader
            action={
              <ButtonLink href="#" size="large">
                Get started
              </ButtonLink>
            }
            badge="Recommended"
            title="Plan 2"
            subtitle="Supporting text or message"
            price="59 EUR"
          />
          <PricingPlanBody
            id="tier-1"
            description="Everything in Plan 1 plus:"
            features={[
              {
                title: 'Feature name',
                description:
                  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris.',
              },
              {
                title: 'Feature name',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              },
              {
                title: 'Feature name',
                description:
                  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris.',
              },
            ]}
          />
          <PricingPlanFooter>footer</PricingPlanFooter>
        </PricingPlan>
        <PricingPlan isHighlighted>
          <PricingPlanHeader
            action={
              <ButtonLink href="#" size="large">
                Get started
              </ButtonLink>
            }
            title="Plan 3"
            price="99 EUR"
            note="Another supporting text or message"
          />
          <PricingPlanBody
            id="tier-2"
            description="Everything in Plan 2 plus:"
            features={[
              {
                title: 'Feature name',
                description:
                  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris.',
              },
              {
                title: 'Feature name with a very long name that should wrap to the next line',
                description:
                  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris.',
              },
              {
                title: 'Feature name',
                description:
                  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris.',
              },
              {
                title: 'Feature name',
                description:
                  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris.',
              },
            ]}
          />
          <PricingPlanFooter>footer</PricingPlanFooter>
        </PricingPlan>
      </Matrix>
    </ScrollView>
  </div>
);

export default PricingPlanInMatrix;
