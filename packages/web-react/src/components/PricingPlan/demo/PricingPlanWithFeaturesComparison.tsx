import React, { useState } from 'react';
import { ButtonLink } from '../../ButtonLink';
import { Flex } from '../../Flex';
import { Matrix } from '../../Matrix';
import { ScrollView } from '../../ScrollView';
import { SegmentedControl, SegmentedControlItem } from '../../SegmentedControl';
import PricingPlan from '../PricingPlan';
import PricingPlanBody from '../PricingPlanBody';
import PricingPlanFooter from '../PricingPlanFooter';
import PricingPlanHeader from '../PricingPlanHeader';

const PricingPlanWithFeaturesComparison = () => {
  const [selectedValue, setSelectedValue] = useState<string | string[]>('monthly');

  return (
    <>
      <Flex marginBottom="space-1000" alignmentY="baseline" alignmentX="right">
        <SegmentedControl
          selectedValue={selectedValue}
          setSelectedValue={setSelectedValue}
          label="Billing"
          name="segmented"
        >
          <SegmentedControlItem key="monthly" id="billing-control-monthly" value="monthly">
            Monthly billing
          </SegmentedControlItem>
          <SegmentedControlItem key="yearly" id="billing-control-yearly" value="yearly">
            Yearly billing
          </SegmentedControlItem>
        </SegmentedControl>
      </Flex>

      <div className="breakout-container d-grid">
        <ScrollView direction="horizontal">
          <Matrix
            spacingX={{ mobile: 'space-600', tablet: 'space-700' }}
            marginBottom="space-800"
            UNSAFE_style={{ marginInline: 'var(--container-padding-inline)' }}
          >
            <PricingPlan hasComparableFeatures>
              <PricingPlanHeader
                action={
                  <ButtonLink href="#" size="large">
                    Get started
                  </ButtonLink>
                }
                title="Plan 1"
                subtitle="Supporting text or message"
                price={selectedValue === 'monthly' ? '39 EUR' : '35 EUR'}
              />
              <PricingPlanBody
                description="Optional description"
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
            <PricingPlan hasComparableFeatures>
              <PricingPlanHeader
                action={
                  <ButtonLink href="#" size="large">
                    Get started
                  </ButtonLink>
                }
                badge="Recommended"
                title="Plan 2"
                subtitle="Supporting text or message"
                price={selectedValue === 'monthly' ? '59 EUR' : '54 EUR'}
              />
              <PricingPlanBody
                description="Optional description"
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
            <PricingPlan hasComparableFeatures isHighlighted>
              <PricingPlanHeader
                action={
                  <ButtonLink href="#" size="large">
                    Get started
                  </ButtonLink>
                }
                title="Plan 3"
                price={selectedValue === 'monthly' ? '99 EUR' : '89 EUR'}
                note="Another supporting text or message"
              />
              <PricingPlanBody
                description="Optional description"
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
    </>
  );
};

export default PricingPlanWithFeaturesComparison;
