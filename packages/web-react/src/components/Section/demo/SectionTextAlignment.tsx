import React from 'react';
import { Heading } from '../../Heading';
import Section from '../Section';
import { AlignmentX } from '../../../constants';

const SectionTextAlignment = () => (
  <>
    <Section>
      <Heading elementType="h2" size="xsmall">
        Section
      </Heading>
    </Section>
    <Section textAlignment={AlignmentX.CENTER}>
      <Heading elementType="h2" size="xsmall">
        Section
      </Heading>
    </Section>
    <Section textAlignment={AlignmentX.RIGHT}>
      <Heading elementType="h2" size="xsmall">
        Section
      </Heading>
    </Section>
  </>
);

export default SectionTextAlignment;
