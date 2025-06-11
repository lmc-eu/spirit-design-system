import { Markdown } from '@storybook/blocks';
import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { ButtonLink } from '../../ButtonLink';
import PricingPlan from '../PricingPlan';
import PricingPlanBody from '../PricingPlanBody';
import PricingPlanHeader from '../PricingPlanHeader';
import ReadMe from '../README.md';

const featureSingle = [
  {
    title: 'Feature name',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
];

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
        type: { summary: 'Array<{ title: string; description: string }>' },
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
    features: featureSingle, // nebo featureMultiple, podle toho co chceš jako default
  },
};

export default meta;
type Story = StoryObj<typeof PricingPlanBody>;

export const PricingPlanBodyPlayground: Story = {
  name: 'PricingPlanBody',
  render: (args) => (
    <PricingPlan>
      <PricingPlanHeader title="Example Header Title" />
      <PricingPlanBody {...args} />
    </PricingPlan>
  ),
};
