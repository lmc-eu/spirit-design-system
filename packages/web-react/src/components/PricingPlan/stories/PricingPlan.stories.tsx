import { accentColors } from '@lmc-eu/spirit-design-tokens';
import { Markdown } from '@storybook/blocks';
import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { ButtonLink } from '../../ButtonLink';
import PricingPlan from '../PricingPlan';
import PricingPlanBody from '../PricingPlanBody';
import PricingPlanFooter from '../PricingPlanFooter';
import PricingPlanHeader from '../PricingPlanHeader';
import ReadMe from '../README.md';

const meta: Meta<typeof PricingPlan> = {
  title: 'Components/PricingPlan',
  component: PricingPlan,
  parameters: {
    docs: {
      page: () => <Markdown>{ReadMe}</Markdown>,
    },
  },
  argTypes: {
    children: {
      control: 'object',
    },
    elementType: {
      control: 'text',
      table: {
        defaultValue: {
          summary: 'article',
        },
      },
    },
    hasComparableFeatures: {
      control: 'boolean',
      table: {
        defaultValue: { summary: 'false' },
      },
    },
    highlightedColor: {
      control: 'select',
      options: Object.keys(accentColors),
    },
  },
  args: {
    children: (
      <>
        <PricingPlanHeader
          action={
            <ButtonLink href="#" size="large">
              Action
            </ButtonLink>
          }
          title="Title"
          subtitle="Supporting text or message"
          price="39 EUR"
          note="Another supporting text or message"
        />
        <PricingPlanBody
          features={[
            {
              title: 'Feature name',
              description: 'Feature description.',
            },
          ]}
        />
        <PricingPlanFooter>Footer</PricingPlanFooter>
      </>
    ),
    elementType: 'article',
    hasComparableFeatures: false,
    highlightedColor: accentColors['02'],
  },
};

export default meta;
type Story = StoryObj<typeof PricingPlan>;

export const Playground: Story = {
  name: 'PricingPlan',
  render: (args) => <PricingPlan {...args} />,
};
