import React from 'react';
import { ActionGroup } from '../../ActionGroup';
import { ButtonLink } from '../../Button';
import { Heading } from '../../Heading';
import { Link } from '../../Link';
import { Text } from '../../Text';
import UNSTABLE_EmptyState from '../UNSTABLE_EmptyState';
import UNSTABLE_EmptyStateSection from '../UNSTABLE_EmptyStateSection';

const EmptyStateDefault = () => (
  <UNSTABLE_EmptyState spacing="space-900">
    <UNSTABLE_EmptyStateSection>
      <div className="docs-Placeholder" style={{ maxWidth: '400px' }}>
        <svg xmlns="http://www.w3.org/2000/svg" width="82" height="40" viewBox="0 0 82 40" fill="none">
          <rect x="1.5" y="0.5" width="79" height="39" stroke="#b9b9b9" strokeDasharray="4 4" />
          <path
            d="M1 29L24.1884 15.814L35.7826 24.1163L64.7681 8L81 24.1163"
            stroke="#b9b9b9"
            strokeWidth="0.8"
            strokeDasharray="4 4"
          />
        </svg>
        <div className="docs-Placeholder__text">
          <Text emphasis="bold" marginBottom="space-0">
            Placeholder
          </Text>
          <Text size="small" color="secondary">
            Replace me with your own component
          </Text>
        </div>
      </div>
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
    <UNSTABLE_EmptyStateSection>
      <ActionGroup
        alignmentX={{ mobile: 'stretch', tablet: 'center' }}
        direction={{ mobile: 'vertical', tablet: 'horizontal-reversed' }}
      >
        <ButtonLink color="primary" href="#">
          Action
        </ButtonLink>
        <ButtonLink color="secondary" href="#">
          Action
        </ButtonLink>
      </ActionGroup>
    </UNSTABLE_EmptyStateSection>
    <UNSTABLE_EmptyStateSection>
      <Link href="#">Link to something</Link>
    </UNSTABLE_EmptyStateSection>
  </UNSTABLE_EmptyState>
);

export default EmptyStateDefault;
