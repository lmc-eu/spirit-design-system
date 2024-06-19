import { Markdown } from '@storybook/blocks';
import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { ButtonLink } from '../../Button';
import ReadMe from '../README.md';
import { UNSTABLE_ActionLayout } from '..';

const meta: Meta<typeof UNSTABLE_ActionLayout> = {
  title: 'Experimental/UNSTABLE_ActionLayout',
  component: UNSTABLE_ActionLayout,
  parameters: {
    docs: {
      page: () => <Markdown>{ReadMe}</Markdown>,
    },
  },
  argTypes: {},
  args: {
    children: (
      <>
        <ButtonLink color="primary" href="/">
          Primary Action
        </ButtonLink>
        <ButtonLink color="secondary" href="/">
          Secondary Action
        </ButtonLink>
      </>
    ),
  },
};

export default meta;
type Story = StoryObj<typeof UNSTABLE_ActionLayout>;

export const Playground: Story = {
  name: 'UNSTABLE_ActionLayout',
};
