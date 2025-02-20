import React from 'react';
import { SizesExtended } from '../../../constants';
import { Heading } from '../../Heading';
import Section from '../Section';

const SectionSizes = () => (
  <>
    {Object.values(SizesExtended).map((size) => (
      <Section key={size} size={size} backgroundColor="secondary">
        <Heading elementType="h2" size="xsmall">
          Section of {size} size
        </Heading>
      </Section>
    ))}
  </>
);

export default SectionSizes;
