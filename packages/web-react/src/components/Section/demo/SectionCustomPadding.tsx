import React from 'react';
import { Heading } from '../../Heading';
import Section from '../Section';

const SectionCustomPadding = () => (
  <Section
    paddingY="space-500"
    paddingTop={{ desktop: 'space-1000' }}
    paddingBottom={{ desktop: 'space-1400' }}
    backgroundColor="secondary"
  >
    <Heading elementType="h2" size="xsmall">
      Custom Padding
    </Heading>
  </Section>
);

export default SectionCustomPadding;
