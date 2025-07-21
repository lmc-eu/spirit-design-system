import { Markdown } from '@storybook/blocks';
import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import PricingPlan from '../PricingPlan';
import PricingPlanBody from '../PricingPlanBody';
import PricingPlanFooter from '../PricingPlanFooter';
import PricingPlanHeader from '../PricingPlanHeader';
import ReadMe from '../README.md';

const meta: Meta<typeof PricingPlanBody> = {
  title: 'Components/PricingPlan',
  component: PricingPlanBody,
  parameters: {
    docs: {
      page: () => <Markdown>{ReadMe}</Markdown>,
    },
  },
  argTypes: {
    features: {
      control: 'object',
      table: {
        type: {
          summary:
            '{ title: string; description: string | ReactNode; tooltipContent?: string | ReactNode, modalContent?: ReactNode }[]',
        },
      },
    },
    description: {
      control: 'text',
      table: {
        defaultValue: { summary: 'undefined' },
      },
    },
  },
  args: {
    description: 'This is a description for the pricing plan body:',
    features: [
      {
        title: 'Feature name',
        description: 'This is a description for the feature.',
      },
      {
        title: 'Feature name with Tooltip',
        description: (
          <>
            This is a <strong>description</strong> for the feature. Please click the title to see the tooltip.
          </>
        ),
        modalContent: 'This is a modal content',
      },
    ],
  },
};

export default meta;
type Story = StoryObj<typeof PricingPlanBody>;

export const PricingPlanBodyPlayground: Story = {
  name: 'PricingPlanBody',
  render: (args) => (
    <PricingPlan>
      <PricingPlanHeader title="Example Header" />
      <PricingPlanBody {...args} />
      <PricingPlanFooter>Example Footer</PricingPlanFooter>
    </PricingPlan>
  ),
};
