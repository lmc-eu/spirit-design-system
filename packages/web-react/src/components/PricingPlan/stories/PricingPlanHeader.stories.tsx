import { Markdown } from '@storybook/blocks';
import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { ButtonLink } from '../../ButtonLink';
import PricingPlan from '../PricingPlan';
import PricingPlanHeader from '../PricingPlanHeader';
import ReadMe from '../README.md';

const meta: Meta<typeof PricingPlanHeader> = {
  title: 'Components/PricingPlan',
  component: PricingPlanHeader,
  parameters: {
    docs: {
      page: () => <Markdown>{ReadMe}</Markdown>,
    },
  },
  argTypes: {
    action: {
      control: 'select',
      options: ['buttonLink', undefined],
      table: {
        defaultValue: { summary: 'undefined' },
      },
      description: `This is the place for the content of the PricingPlanHeader action. In the real code
        you can pass in any children you want. In this demo we have predefined options:
        \`buttonLink\` and \`undefined\`. Please note the predefined options
        in this demo are not customizable.`,
      mapping: {
        buttonLink: (
          <ButtonLink href="#" size="large">
            Action
          </ButtonLink>
        ),
      },
    },
    badge: {
      control: 'text',
      table: {
        defaultValue: { summary: 'undefined' },
      },
    },
    note: {
      control: 'text',
      table: {
        defaultValue: { summary: 'undefined' },
      },
    },
    price: {
      control: 'text',
      table: {
        defaultValue: { summary: 'undefined' },
      },
    },
    subtitle: {
      control: 'text',
      table: {
        defaultValue: { summary: 'undefined' },
      },
    },
    title: {
      control: 'text',
      table: {
        defaultValue: { summary: 'undefined' },
      },
    },
  },
  args: {
    action: 'buttonLink',
    badge: undefined,
    note: 'Another supporting text or message',
    price: '39 EUR',
    subtitle: 'Supporting text or message',
    title: 'Title',
  },
};

export default meta;
type Story = StoryObj<typeof PricingPlanHeader>;

export const PricingPlanHeaderPlayground: Story = {
  name: 'PricingPlanHeader',
  render: (args) => (
    <PricingPlan>
      <PricingPlanHeader {...args} />
    </PricingPlan>
  ),
};
