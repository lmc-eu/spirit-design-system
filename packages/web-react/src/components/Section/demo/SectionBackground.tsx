import React from 'react';
import { BackgroundColors } from '../../../constants';
import { Heading } from '../../Heading';
import Section from '../Section';

const SectionBackground = () => (
  <>
    {Object.values(BackgroundColors).map((background) => (
      <Section key={background} backgroundColor={background} size="xsmall">
        <Heading elementType="h2" size="xsmall">
          {background.slice(0, 1).toUpperCase() + background.slice(1)}
        </Heading>
      </Section>
    ))}
  </>
);

export default SectionBackground;
