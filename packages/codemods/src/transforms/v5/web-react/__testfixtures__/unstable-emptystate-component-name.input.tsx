import React from 'react';
import { Heading, Text } from '@lmc-eu/spirit-web-react/src';
// @ts-ignore: No declaration -- The library is not installed; we don't need to install it for fixtures.
import { UNSTABLE_EmptyState } from '@lmc-eu/spirit-web-react/components/UNSTABLE_EmptyState';
// @ts-ignore: No declaration -- The library is not installed; we don't need to install it for fixtures.
import { UNSTABLE_EmptyStateSection } from '@lmc-eu/spirit-web-react/components/UNSTABLE_EmptyStateSection';

export const MyComponent = () => (
  <UNSTABLE_EmptyState spacing="space-900">
    <UNSTABLE_EmptyStateSection>
      <div>Content</div>
    </UNSTABLE_EmptyStateSection>
    <UNSTABLE_EmptyStateSection spacing="space-600">
      <Heading elementType="h2" size="xsmall">
        Headline
      </Heading>
      <Text>
        In publishing and graphic design, lorem ipsum is common placeholder text used to demonstrate the graphic
        elements
      </Text>
    </UNSTABLE_EmptyStateSection>
  </UNSTABLE_EmptyState>
);
