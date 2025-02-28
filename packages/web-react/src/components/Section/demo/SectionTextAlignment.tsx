import React from 'react';
import { TextAlignments } from '../../../constants';
import { Heading } from '../../Heading';
import Section from '../Section';

const SectionTextAlignment = () => (
  <>
    <Section>
      <Heading elementType="h2" size="xsmall">
        Section
      </Heading>
    </Section>
    <Section textAlignment={TextAlignments.CENTER}>
      <Heading elementType="h2" size="xsmall">
        Section
      </Heading>
    </Section>
    <Section textAlignment={TextAlignments.RIGHT}>
      <Heading elementType="h2" size="xsmall">
        Section
      </Heading>
    </Section>
  </>
);

export default SectionTextAlignment;
