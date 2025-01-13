import { Markdown } from '@storybook/blocks';
import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { ActionGroup } from '../../ActionGroup';
import { ButtonLink } from '../../Button';
import { Heading } from '../../Heading';
import { Link } from '../../Link';
import { Text } from '../../Text';
import ReadMe from '../README.md';
import { UNSTABLE_EmptyState, UNSTABLE_EmptyStateSection } from '..';

const meta: Meta<typeof UNSTABLE_EmptyState> = {
  title: 'Experimental/UNSTABLE_EmptyState',
  component: UNSTABLE_EmptyState,
  parameters: {
    docs: {
      page: () => <Markdown>{ReadMe}</Markdown>,
    },
  },
  argTypes: {},
  args: {
    spacing: 'space-700',
    children: (
      <>
        <UNSTABLE_EmptyStateSection spacing="space-500">
          <Heading elementType="h2" size="xsmall">
            Headline
          </Heading>
          <Text color="secondary">
            In publishing and graphic design, lorem ipsum is common placeholder text used to demonstrate the graphic
            elements
          </Text>
        </UNSTABLE_EmptyStateSection>
        <UNSTABLE_EmptyStateSection>
          <ActionGroup alignmentX={{ mobile: 'stretch', tablet: 'center' }}>
            <ButtonLink color="primary" href="#">
              Action
            </ButtonLink>
            <ButtonLink color="secondary" href="#">
              Action
            </ButtonLink>
          </ActionGroup>
        </UNSTABLE_EmptyStateSection>
        <UNSTABLE_EmptyStateSection>
          <Link href="/">Link to something</Link>
        </UNSTABLE_EmptyStateSection>
      </>
    ),
  },
};

export default meta;
type Story = StoryObj<typeof UNSTABLE_EmptyState>;

export const Playground: Story = {
  name: 'UNSTABLE_EmptyState',
};
