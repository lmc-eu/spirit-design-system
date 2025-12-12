import React from 'react';
import { Heading, Text } from '@lmc-eu/spirit-web-react/src';
// @ts-ignore: No declaration -- The library is not installed; we don't need to install it for fixtures.
import { EmptyState } from '@lmc-eu/spirit-web-react/components/EmptyState';
// @ts-ignore: No declaration -- The library is not installed; we don't need to install it for fixtures.
import { EmptyStateSection } from '@lmc-eu/spirit-web-react/components/EmptyStateSection';

export const MyComponent = () => (
  <EmptyState spacing="space-900">
    <EmptyStateSection>
      <div>Content</div>
    </EmptyStateSection>
    <EmptyStateSection spacing="space-600">
      <Heading elementType="h2" size="xsmall">
        Headline
      </Heading>
      <Text>
        In publishing and graphic design, lorem ipsum is common placeholder text used to demonstrate the graphic
        elements
      </Text>
    </EmptyStateSection>
  </EmptyState>
);
