import React from 'react';
import { ButtonLink } from '../../Button';
import { Heading } from '../../Heading';
import { Link } from '../../Link';
import { Text } from '../../Text';
import { UNSTABLE_ActionLayout } from '../../UNSTABLE_ActionLayout';
import UNSTABLE_EmptyState from '../UNSTABLE_EmptyState';
import UNSTABLE_EmptyStateSection from '../UNSTABLE_EmptyStateSection';

const EmptyStateDefault = () => (
  <UNSTABLE_EmptyState spacing="space-700">
    <UNSTABLE_EmptyStateSection>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          width: '400px',
          padding: '48px 24px',
          textAlign: 'center',
          gap: '32px',
          border: '1px dashed #3EAC98',
          background: '#FFF',
        }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="82" height="40" viewBox="0 0 82 40" fill="none">
          <rect x="1.5" y="0.5" width="79" height="39" stroke="#3EAC98" strokeDasharray="4 4" />
          <path
            d="M1 29L24.1884 15.814L35.7826 24.1163L64.7681 8L81 24.1163"
            stroke="#3EAC98"
            strokeWidth="0.8"
            strokeDasharray="4 4"
          />
        </svg>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', textAlign: 'center', color: '#3EAC98' }}>
          <Heading size="xsmall">Placeholder</Heading>
          <Text>Replace me with your own component</Text>
        </div>
      </div>
    </UNSTABLE_EmptyStateSection>
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
      <UNSTABLE_ActionLayout>
        <ButtonLink color="primary" href="#">
          Action
        </ButtonLink>
        <ButtonLink color="secondary" href="#">
          Action
        </ButtonLink>
      </UNSTABLE_ActionLayout>
    </UNSTABLE_EmptyStateSection>
    <UNSTABLE_EmptyStateSection>
      <Link href="#">Link to something</Link>
    </UNSTABLE_EmptyStateSection>
  </UNSTABLE_EmptyState>
);

export default EmptyStateDefault;
